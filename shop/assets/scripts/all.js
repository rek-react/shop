

"use strict";

function DynamicAdapt(type) {
   this.type = type;
}

DynamicAdapt.prototype.init = function () {
   const _this = this;
   // массив объектов
   this.оbjects = [];
   this.daClassname = "_dynamic_adapt_";
   // массив DOM-элементов
   this.nodes = document.querySelectorAll("[data-da]");

   // наполнение оbjects объктами
   for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(dataArray[0].trim());
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
   }

   this.arraySort(this.оbjects);

   // массив уникальных медиа-запросов
   this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
      return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
   }, this);
   this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
   });

   // навешивание слушателя на медиа-запрос
   // и вызов обработчика при первом запуске
   for (let i = 0; i < this.mediaQueries.length; i++) {
      const media = this.mediaQueries[i];
      const mediaSplit = String.prototype.split.call(media, ',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
         return item.breakpoint === mediaBreakpoint;
      });
      matchMedia.addListener(function () {
         _this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
   }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
   if (matchMedia.matches) {
      for (let i = 0; i < оbjects.length; i++) {
         const оbject = оbjects[i];
         оbject.index = this.indexInParent(оbject.parent, оbject.element);
         this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
   } else {
      for (let i = 0; i < оbjects.length; i++) {
         const оbject = оbjects[i];
         if (оbject.element.classList.contains(this.daClassname)) {
            this.moveBack(оbject.parent, оbject.element, оbject.index);
         }
      }
   }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
   element.classList.add(this.daClassname);
   if (place === 'last' || place >= destination.children.length) {
      destination.insertAdjacentElement('beforeend', element);
      return;
   }
   if (place === 'first') {
      destination.insertAdjacentElement('afterbegin', element);
      return;
   }
   destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
   element.classList.remove(this.daClassname);
   if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement('beforebegin', element);
   } else {
      parent.insertAdjacentElement('beforeend', element);
   }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
   const array = Array.prototype.slice.call(parent.children);
   return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
   if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
         if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
               return 0;
            }

            if (a.place === "first" || b.place === "last") {
               return -1;
            }

            if (a.place === "last" || b.place === "first") {
               return 1;
            }

            return a.place - b.place;
         }

         return a.breakpoint - b.breakpoint;
      });
   } else {
      Array.prototype.sort.call(arr, function (a, b) {
         if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
               return 0;
            }

            if (a.place === "first" || b.place === "last") {
               return 1;
            }

            if (a.place === "last" || b.place === "first") {
               return -1;
            }

            return b.place - a.place;
         }

         return b.breakpoint - a.breakpoint;
      });
      return;
   }
};

const da = new DynamicAdapt("max");
da.init();;
//ibg
const bg = document.querySelectorAll('.bg')
if (bg) {
   checkibg()
}
function checkibg() {
   for (let index = 0; index < bg.length; index++) {
      const _bg = bg[index];
      if (_bg.querySelector('img')) {
         const bgImage = _bg.querySelector('img')
         _bg.style.backgroundImage = `url(${bgImage.getAttribute('src')})`
      }
   }
};
const selects = document.querySelectorAll('#select')
if (selects) {
   for (let i = 0; i < selects.length; i++) {
      const select = selects[i]
      const options = select.querySelectorAll('option')

      const cSelect = document.createElement('div')
      const cSelectList = document.createElement('ul')
      const cSelectCurrent = document.createElement('div')

      cSelect.className = 'select-new'
      cSelectList.className = 'select-new__body'
      cSelectCurrent.className = 'select-new__current'


      cSelect.append(cSelectCurrent, cSelectList)

      select.after(cSelect)

      const createCustomDom = function (x, y) {
         let selectItems = ''
         for (var i = 0; i < options.length; i++) {
            selectItems += '<li type="button" class="select-new__item"  title="' + options[i].text + '" data-value="' + options[i].value + '">' + options[i].text + '</li>'
            if (options[i].hasAttribute('class')) {
               const optionClass = options[i].getAttribute('class')
               cSelectCurrent.classList.add(optionClass)
               options[i].removeAttribute('class')
            }
         }
         cSelectList.innerHTML = selectItems
         x(), y();
      }

      const toggleClass = (event) => {
         if (event.code) {
            if (event.code === 'Escape') {
               cSelect.classList.remove('_show')
            }
            return false

         }
         cSelect.classList.toggle('_show')


      }

      const currentTextValue = () => {
         cSelectCurrent.textContent = cSelectList.children[0].textContent


      }

      const currentValue = () => {
         const items = cSelectList.children
         for (var el = 0; el < items.length; el++) {
            let selectValue = items[el].getAttribute('data-value')
            let selectText = items[el].textContent
            items[el].addEventListener('click', () => {
               cSelect.classList.remove('_show')
               cSelectCurrent.textContent = selectText
               select.value = selectValue
            })
         }
      }

      const desctopFn = () => {
         cSelectCurrent.addEventListener('click', toggleClass)
         document.addEventListener('keydown', toggleClass)
      }



      /*const mobileFn = () => {
         for (let j = 0; j < selects.length; j++) {
            let mobileSelect = selects[j]
            mobileSelect.addEventListener('change', () => {
               mobileSelect.nextElementSibling.querySelector('.select-new__current').textContent = mobileSelect.value
            })
         }
      }*/
      createCustomDom(currentTextValue, currentValue)



      document.addEventListener('mouseup', (e) => {
         if (!cSelect.contains(e.target)) cSelect.classList.remove('_show')
      })

      detectmob(/*mobileFn,*/ desctopFn)

      function detectmob(/*x,*/ y) {
         y()
         /*if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
         ) {
            x();
         }
         else {
            y();
         }*/
      }
   }
}

;
const btnCloses = document.querySelectorAll('[data-close]')
if (btnCloses) {
   for (let index = 0; index < btnCloses.length; index++) {
      const btnClose = btnCloses[index];
      btnClose.addEventListener('click', () => {
         var btnCloseAttr = btnClose.dataset.close
         var blockClose = document.querySelector(btnCloseAttr)
         blockClose.remove()
      })
   }
}
;
const textareas = document.querySelectorAll('textarea')
if(textareas){
   for (let index = 0; index < textareas.length; index++) {
      const textarea = textareas[index];
      let heightTextarea = textarea.offsetHeight
      document.addEventListener('input', (event)=>{
         if(event.target.closest('textarea')){
            let $this = event.target
            $this.style.height = heightTextarea + 'px'
            $this.style.height = $this.scrollHeight + 'px'

         }
         
      })
   }
};

const swiperPage = document.querySelector('.swiper-page__body')
if (swiperPage) {
   new Swiper(swiperPage, {
      watchOverflow: true,
      simulateTouch: false,
      slidesPerGroup: 1,
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      autoHeight: true,
      pagination: {
         el: '.swiper-page__pagination',
         clickable: true,
      }
   })
   const swiperPageImages = document.querySelectorAll('.slide-swiper__bg')
   const swiperPageDotts = document.querySelectorAll('.swiper-page__pagination .swiper-pagination-bullet')
   for (let index = 0; index < swiperPageImages.length; index++) {
      const swiperPageImage = swiperPageImages[index].querySelector('img').getAttribute('src');
      swiperPageDotts[index].style.backgroundImage = 'url("' + swiperPageImage + '")'
   }
}
const swiperProducts = document.querySelector('.products-swiper__body')
if (swiperProducts) {
   new Swiper(swiperProducts, {
      watchOverflow: true,
      allowTouchMove: false,
      slidesPerGroup: 1,
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      autoHeight: true,
      pagination: {
         el: '.products-swiper__pagination',
         type: 'fraction',
      },
      navigation: {
         prevEl: '.products-swiper__arrow_prev',
         nextEl: '.products-swiper__arrow_next'
      }
   })
}
const swiperProducts2 = document.querySelector('.products-swiper__body-catalog')
if (swiperProducts2) {
   new Swiper(swiperProducts2, {
      watchOverflow: true,
      allowTouchMove: false,
      slidesPerGroup: 1,
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      autoHeight: true,
      pagination: {
         el: '.pagination-products__pagination',
         type: 'bullets',
         clickable: true,
         renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
         },

      },
      navigation: {
         prevEl: '.pagination-products__arrow_prev',
         nextEl: '.pagination-products__arrow_next'
      }
   })
}
const swiperBrands = document.querySelector('.brands-page__body')
if (swiperBrands) {
   new Swiper(swiperBrands, {
      watchOverflow: true,
      allowTouchMove: false,
      slidesPerGroup: 1,
      observer: true,
      loop: true,
      observeParents: true,
      observeSlideChildren: true,
      navigation: {
         prevEl: '.brands-page__arrow_prev',
         nextEl: '.brands-page__arrow_next'
      },
      breakpoints: {
         991: {
            slidesPerView: 5,
         },
         767: {
            slidesPerView: 4,
         },
         660: {
            slidesPerView: 3,
         },
         525: {
            slidesPerView: 2,
         },
         480: {
            slidesPerView: 1,
         },
      }
   })
}


const swiperImageCart = document.querySelector('.images-cart__mainslider')
const swiperImageCartSmall = document.querySelector('.images-cart__small')
if (swiperImageCart) {
   let SmallCartImage = new Swiper(swiperImageCartSmall, {
      watchOverflow: true,
      slidesPerGroup: 1,

      spaceBetween: 12,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      breakpoints: {
         840: {
            slidesPerView: 4,
         },
         525: {
            slidesPerView: 6,
         },
         270: {
            slidesPerView: 4,
         }
      }

   })
   new Swiper(swiperImageCart, {
      watchOverflow: true,
      slidesPerGroup: 1,
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      thumbs: {
         swiper: SmallCartImage
      }
   })
};
const burger = document.querySelector('.burger')
const nav = document.querySelector('.menu')
const body = document.body
if (burger) {
   burgerCheck()
}
function burgerCheck() {
   burger.addEventListener('click', () => {
      burger.classList.toggle('_active')
      nav.classList.toggle('_show')
      body.classList.toggle('_lock')
   })
};
class Navside {
   constructor(navSide){
      const burgerSide = navSide.querySelector('.nav-side__hamburger')
      const navSideMenu = navSide.querySelector('.nav-side__menu')
      this.clickBurger(burgerSide, navSideMenu)
   }
   clickBurger (burgerSide, navSideMenu) {
      burgerSide.addEventListener('click', () => {
         navSideMenu.classList.toggle('_show')
         burgerSide.classList.toggle('_active')
      })
   }
}
const navSideQuery= document.querySelector('.nav-side')
if(navSideQuery) {
  new Navside(navSideQuery)
};
const isMobile = {
   Android() {
      return navigator.userAgent.match(/Android/i)
   },
   BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i)
   },
   IOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
   },
   Opera() {
      return navigator.userAgent.match(/Opera Mini/i)
   },
   Windows() {
      return navigator.userAgent.match(/IEMobile/i)
   },
   any() {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.IOS() ||
         isMobile.Opera() ||
         isMobile.Windows())
   }
}

const navItemModals = document.querySelectorAll('.nav-side__item_modal-menu')

if (navItemModals) {
   for (let index = 0; index < navItemModals.length; index++) {
      const navItemModal = navItemModals[index];
      //preventDefault
      navItemModal.addEventListener('click', (event) => {
         event.preventDefault()
      })
      if (isMobile.any()) {
         navItemModal.addEventListener('click', () => {
            navItemModal.classList.toggle('_show')
         })
      } else {
         navItemModal.addEventListener('mouseenter', () => {
            navItemModal.classList.add('_show')
         })
         navItemModal.addEventListener('mouseleave', () => {
            navItemModal.classList.remove('_show')
         })
      }
   }

}


;
const searchTitle = document.querySelector('.search__title')
const selected = document.querySelector('.selected')

if (searchTitle) {
   searchTitle.addEventListener('click', () => {
      selected.classList.toggle('_show')
      searchTitle.classList.toggle('_active')
   })



}
const categoryesCheckboxs = document.querySelectorAll('.categoryes__checkbox')
if (categoryesCheckboxs) {
   const searchSelect = document.querySelector('.search__select')
   for (let index = 0; index < categoryesCheckboxs.length; index++) {
      const categoryesCheckbox = categoryesCheckboxs[index];
      categoryesCheckbox.addEventListener('change', () => {
         categoryesCheckbox.classList.toggle('_active')

         const categoryesCheckboxActive = document.querySelectorAll('.categoryes__checkbox._active')

         if (categoryesCheckboxActive.length > 0) {
            searchSelect.classList.add('_category')
            const searchQuantity = document.querySelector('.search__quantity')
            searchQuantity.innerHTML = searchQuantity.getAttribute('data-quantity') + categoryesCheckboxActive.length
         } else {
            searchSelect.classList.remove('_category')
         }
      })
   }

};
var rangeFilter = document.querySelector('.filter-range');

if (rangeFilter) {
   noUiSlider.create(rangeFilter, {
      start: [0, 100000],
      connect: true,
      step: 1,
      tooltips: [wNumb({
         decimals: 0,
         thousand: '',
      }), wNumb({
         decimals: 0,
         thousand: '',
      })],
      range: {
         'min': 0,
         'max': 200000
      }
   });
   document.addEventListener('change', function (event) {
      if (event.target.closest('#price-from')) {
         let inputValue = event.target.closest('#price-from').value
         rangeFilter.noUiSlider.set([inputValue, null]);
      }
      if (event.target.closest('#price-to')) {
         let inputValue = event.target.closest('#price-to').value
         rangeFilter.noUiSlider.set([null, inputValue]);
      }
   });

}






;

const filterReset = document.getElementById('filter-reset')
if (filterReset) {


   const productCleanButtons = document.querySelectorAll('.comparison-filter__clean')
   const productReset = document.querySelector('.comparison-filter__reset')
   const spoilers = document.querySelectorAll('.spoiler-filter')
   const filterSideHeader = document.querySelector('.filter-side__header')

   for (let index = 0; index < productCleanButtons.length; index++) {
      const productCleanButton = productCleanButtons[index];
      const productClean = productCleanButton.closest('.comparison-filter__item')
      productReset.addEventListener('click', () => {
         productClean.remove()
      })
      filterReset.addEventListener('click', () => {
         rangeFilter.noUiSlider.set([0, 100000]);
         productClean.remove()
      })
   }

   for (let index = 0; index < spoilers.length; index++) {
      const spoiler = spoilers[index];
      const bodySpoiler = spoiler.nextElementSibling
      spoiler.addEventListener('click', () => {
         spoiler.classList.toggle('_active')
         bodySpoiler.classList.toggle('_show')
      })
   }

   filterSideHeader.addEventListener('click', () => {
      filterSideHeader.classList.toggle('_active')
   })
   filterSideHeader.click()
}
;


const total = document.querySelector('[data-total]')
class quantityes {
   constructor(quantity) {
      this.quantityes = quantity
      this.input(this.quantityes)
   }
   input(quantityes) {
      quantityes.forEach(quantitye => {
         const quantityeInput = quantitye.querySelector('input')
         const inputMax = Number(quantityeInput.dataset.max)
         const inputMin = Number(quantityeInput.dataset.min)
         this.changeInput(quantityeInput, quantitye, inputMax, inputMin)
      });
   }
   changeInput(quantityeInput, quantitye, inputMax, inputMin) {
      quantitye.addEventListener('click', (event) => {
         const arrowPrev = event.target.closest('[data-quantity="arrow-prev"]')
         const arrowNext = event.target.closest('[data-quantity="arrow-next"]')
         if (arrowNext) {
            if (quantityeInput.value >= inputMax) return
            ++quantityeInput.value
            this.productquantitye(quantitye, quantityeInput)

         }
         if (arrowPrev) {
            if (quantityeInput.value == inputMin) return
            --quantityeInput.value
            this.productquantitye(quantitye, quantityeInput)
         }

      })
      quantityeInput.addEventListener('input', (event) => {
         let quantityInputValue = event.target.value.replace(/[^\d]/g, '');
         if (quantityInputValue <= inputMin) {
            event.target.value = inputMin
         } else if (quantityInputValue > inputMax) {
            event.target.value = inputMax
         } else {
            event.target.value = quantityInputValue
         }
         this.productquantitye(quantitye, quantityeInput)

      })
   }
   productquantitye(quantitye, quantityeInput) {
      const subTotal = quantitye.parentElement.querySelector('[data-subtotal]')
      if (subTotal) {
         var textSubTotal = subTotal.dataset.subtotal.replace(/\s/g, '')
         var quantityeInputValue = quantityeInput.value
         this.sumSubTotal(subTotal, textSubTotal, quantityeInputValue)
      }
   }
   sumSubTotal(subTotal, textSubTotal, quantityeInputValue) {
      subTotal.textContent = parseInt(textSubTotal) * parseInt(quantityeInputValue)
   }
}
const quantity = document.querySelectorAll('#quantity')
if (quantity) {
   new quantityes(quantity)

};
const TabItemSelector = '.tabs__tab';
const ContentItemSelector = '[data-itemtab]';

class TabsManager {
   constructor(navNode) {
      this.tabs = [];
      this.activeTab = null;

      this.initFromHtml(navNode);
      this.activateTab(this.tabs[0]);
   }

   initFromHtml(navNode) {
      const headers = navNode.querySelectorAll(TabItemSelector);
      const contents = navNode.querySelectorAll(ContentItemSelector);

      for (var i = 0; i < headers.length; i++) {
         this.registerTab(headers[i], contents[i]);
      }
   }

   registerTab(header, content) {
      const tab = new TabItem(header, content);
      tab.onActivate(() => this.activateTab(tab));
      this.tabs.push(tab);
   }

   activateTab(tabItem) {
      if (this.activeTab) {
         this.activeTab.setActive(false);
      }

      this.activeTab = tabItem;
      this.activeTab.setActive(true);
   }

}

const ActiveTabHeaderClass = '_active';
const ActiveTabContentClass = '_show';

class TabItem {
   constructor(header, content) {
      this.header = header;
      this.content = content;
   }
   onActivate(action) {
      this.header.addEventListener('click', () => action(this));
   }
   setActive(value) {
      this.header.classList.toggle(ActiveTabHeaderClass, value)
      this.content.classList.toggle(ActiveTabContentClass, value);
   }
}

let tabs = document.querySelector('#tabs')
if (tabs) {
   new TabsManager(tabs)
};
class Form {
   constructor(form) {
      this.form = form
      this.requery(this.form)
   }
   requery(form) {
      this.inputReqs = form.querySelectorAll('#req')
      this.btn = form.querySelector('button[type="submit"]')
      this.submitForm(this.btn, this.inputReqs)
   }
   submitForm(btn, inputReqs) {
      inputReqs.forEach(inputReq => {
         btn.addEventListener('click', (event) => {
            if (inputReq.value === '') {
               this.addError(inputReq)
               event.preventDefault()
            }
         })
         inputReq.addEventListener('focus', () => {
            this.removeError(inputReq)
         })
      })
   }
   addError(inputReq) {
      if (!inputReq.classList.contains('_error')) {
         inputReq.classList.add('_error')
         var classError = 'error'
         var textError = 'Заполните поле'
         var errorGroup = inputReq.parentElement
         errorGroup.insertAdjacentHTML(
            'beforeend',
            '<div class="' + classError + '">' + textError + '</div>'
         )
      }
   }
   removeError(inputReq) {
      if (inputReq.classList.contains('_error')) {
         inputReq.classList.remove('_error')
         inputReq.nextElementSibling.remove()
      }
   }
}
const formMain = document.querySelector('#form')
if (formMain) {
   new Form(formMain)
}
;
