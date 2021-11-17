const textareas = document.querySelectorAll('textarea')
if(textareas){
   for (let index = 0; index < textareas.length; index++) {
      const textarea = textareas[index];
      let heightTextarea = textarea.offsetHeight
      document.addEventListener('input', (event)=>{
         if(event.target.closest('textarea')){
            let $this = event.target
            $this.style.height = heightTextarea + 'px'
            $this.style.height = $this.scrollHeight + 'px'

         }
         
      })
   }
}