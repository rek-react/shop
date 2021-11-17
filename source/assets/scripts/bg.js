//ibg
const bg = document.querySelectorAll('.bg')
if (bg) {
   checkibg()
}
function checkibg() {
   for (let index = 0; index < bg.length; index++) {
      const _bg = bg[index];
      if (_bg.querySelector('img')) {
         const bgImage = _bg.querySelector('img')
         _bg.style.backgroundImage = `url(${bgImage.getAttribute('src')})`
      }
   }
}