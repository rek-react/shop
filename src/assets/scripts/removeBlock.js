
class RemoveBlock {
   constructor() {
      this.btnCloses = document.querySelectorAll('[data-close]')

   }
   init() {
      for (let index = 0; index < this.btnCloses.length; index++) {
         const btnClose = this.btnCloses[index];
         btnClose.addEventListener('click', () => {
            var btnCloseAttr = btnClose.dataset.close
            var blockClose = document.querySelector(btnCloseAttr)
            blockClose.remove()
         })
      }
   }

}

export default new RemoveBlock()
