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

}