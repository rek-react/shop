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
}