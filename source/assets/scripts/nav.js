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
}