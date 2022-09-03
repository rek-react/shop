const isMobile = {
   Android() {
      return navigator.userAgent.match(/Android/i)
   },
   BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i)
   },
   IOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
   },
   Opera() {
      return navigator.userAgent.match(/Opera Mini/i)
   },
   Windows() {
      return navigator.userAgent.match(/IEMobile/i)
   },
   any() {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.IOS() ||
         isMobile.Opera() ||
         isMobile.Windows())
   }
}

class ModalNav {
   constructor() {
      this.navItemModals = document.querySelectorAll('.nav-side__item_modal-menu')
   }
   init() {
      for (let index = 0; index < this.navItemModals.length; index++) {
         const navItemModal = this.navItemModals[index];
         navItemModal.addEventListener('click', (event) => {
            event.preventDefault()
         })
         if (isMobile.any()) {
            navItemModal.addEventListener('click', () => {
               navItemModal.classList.toggle('_show')
            })
         } else {
            navItemModal.addEventListener('mouseenter', () => {
               navItemModal.classList.add('_show')
            })
            navItemModal.addEventListener('mouseleave', () => {
               navItemModal.classList.remove('_show')
            })
         }
      }
   }
}

export default new ModalNav()


