const btnCloses = document.querySelectorAll('[data-close]')
if (btnCloses) {
   for (let index = 0; index < btnCloses.length; index++) {
      const btnClose = btnCloses[index];
      btnClose.addEventListener('click', () => {
         var btnCloseAttr = btnClose.dataset.close
         var blockClose = document.querySelector(btnCloseAttr)
         blockClose.remove()
      })
   }
}
