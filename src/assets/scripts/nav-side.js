class Navside {
   constructor() {
      this.navSide = document.querySelector('.nav-side')
      this.burgerSide = this.navSide.querySelector('.nav-side__hamburger')
      this.navSideMenu = this.navSide.querySelector('.nav-side__menu')
   }
   init() {
      this.clickBurger(this.burgerSide, this.navSideMenu)
   }
   clickBurger() {
      this.burgerSide.addEventListener('click', () => {
         this.navSideMenu.classList.toggle('_show')
         this.burgerSide.classList.toggle('_active')
      })
   }
}
export default new Navside()