
class Search {
   constructor() {
      this.searchTitle = document.querySelector('.search__title')
      this.selected = document.querySelector('.selected')
   }

   init() {
      this.searchTitle.addEventListener('click', () => {
         this.selected.classList.toggle('_show')
         this.searchTitle.classList.toggle('_active')
      })
      const categoryesCheckboxs = document.querySelectorAll('.categoryes__checkbox')
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
   }

}
export default new Search()