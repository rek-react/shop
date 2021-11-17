
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
}