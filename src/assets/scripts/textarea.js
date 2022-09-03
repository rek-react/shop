class Textarea {
   constructor() {
      this.textareas = document.querySelectorAll('textarea')
   }
   init() {
      for (let index = 0; index < this.textareas.length; index++) {
         const textarea = this.textareas[index];
         let heightTextarea = textarea.offsetHeight
         document.addEventListener('input', (event) => {
            if (event.target.closest('textarea')) {
               let $this = event.target
               $this.style.height = heightTextarea + 'px'
               $this.style.height = $this.scrollHeight + 'px'

            }

         })
      }
   }
}

export default new Textarea()   