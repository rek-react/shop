const bg = document.querySelectorAll('.bg')
export const checkibg = () => {
   for (let index = 0; index < bg.length; index++) {
      const _bg = bg[index];
      if (_bg.querySelector('img')) {
         const bgImage = _bg.querySelector('img')
         _bg.style.backgroundImage = `url(${bgImage.getAttribute('src')})`
      }
   }
}