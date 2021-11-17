
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
