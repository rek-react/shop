
class Nav {
   constructor() {
      this.burger = document.querySelector('.burger')
      this.nav = document.querySelector('.menu')
      this.body = document.body
   }

   init() {
      this.burger.addEventListener('click', () => {
         this.burger.classList.toggle('_active')
         this.nav.classList.toggle('_show')
         this.body.classList.toggle('_lock')
      })
   }

}
export default new Nav()