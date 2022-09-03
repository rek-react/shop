import Swiper, { Navigation, Pagination } from 'swiper'

class SwiperUser {
   constructor() {
      this.swiperPage = document.querySelector('.swiper-page__body')
      this.swiperProducts = document.querySelector('.products-swiper__body')
      this.swiperProducts2 = document.querySelector('.products-swiper__body-catalog')
      this.swiperBrands = document.querySelector('.brands-page__body')
      this.swiperImageCart = document.querySelector('.images-cart__mainslider')
      this.swiperImageCartSmall = document.querySelector('.images-cart__small')
   }

   init() {
      new Swiper(this.swiperPage, {
         watchOverflow: true,
         simulateTouch: false,
         slidesPerGroup: 1,
         modules: [Pagination],
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
      new Swiper(this.swiperProducts, {
         watchOverflow: true,
         allowTouchMove: false,
         slidesPerGroup: 1,
         slidesPerView: 1,
         observer: true,
         modules: [Navigation, Pagination],
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
      new Swiper(this.swiperProducts2, {
         watchOverflow: true,
         allowTouchMove: false,
         slidesPerGroup: 1,
         slidesPerView: 1,
         observer: true,
         observeParents: true,
         observeSlideChildren: true,
         modules: [Navigation, Pagination],
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
      new Swiper(this.swiperBrands, {
         watchOverflow: true,
         allowTouchMove: false,
         slidesPerGroup: 1,
         observer: true,
         loop: true,
         observeParents: true,
         modules: [Navigation],
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



      let SmallCartImage = new Swiper(this.swiperImageCartSmall, {
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
      new Swiper(this.swiperImageCart, {
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

}
export default new SwiperUser()