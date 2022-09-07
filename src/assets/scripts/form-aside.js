import nouislider from './nouislider.js'

class FormAside {
   constructor() {
      this.filterReset = document.getElementById('filter-reset')
      this.productCleanButtons = document.querySelectorAll('.comparison-filter__clean')
      this.productReset = document.querySelector('.comparison-filter__reset')
      this.spoilers = document.querySelectorAll('.spoiler-filter')
      this.filterSideHeader = document.querySelector('.filter-side__header')
   }

   init() {
      if (this.filterSideHeader) {
         for (let index = 0; index < this.productCleanButtons.length; index++) {
            const productCleanButton = this.productCleanButtons[index];
            const productClean = productCleanButton.closest('.comparison-filter__item')
            this.productReset.addEventListener('click', () => {
               productClean.remove()
            })
            productCleanButton.addEventListener('click', () => {
               productClean.remove()
            })
            this.filterReset.addEventListener('click', () => {
               nouislider.rangeFilter.noUiSlider.set([0, 100000]);
               productClean.remove()
            })
         }

         for (let index = 0; index < this.spoilers.length; index++) {
            const spoiler = this.spoilers[index];
            const bodySpoiler = spoiler.nextElementSibling
            spoiler.addEventListener('click', () => {
               spoiler.classList.toggle('_active')
               bodySpoiler.classList.toggle('_show')
            })
         }

         this.filterSideHeader.addEventListener('click', () => {
            this.filterSideHeader.classList.toggle('_active')
         })
         this.filterSideHeader.click()
      }
   }
}


export default new FormAside()