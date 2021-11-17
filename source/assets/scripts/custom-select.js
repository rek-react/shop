const selects = document.querySelectorAll('#select')
if (selects) {
   for (let i = 0; i < selects.length; i++) {
      const select = selects[i]
      const options = select.querySelectorAll('option')

      const cSelect = document.createElement('div')
      const cSelectList = document.createElement('ul')
      const cSelectCurrent = document.createElement('div')

      cSelect.className = 'select-new'
      cSelectList.className = 'select-new__body'
      cSelectCurrent.className = 'select-new__current'


      cSelect.append(cSelectCurrent, cSelectList)

      select.after(cSelect)

      const createCustomDom = function (x, y) {
         let selectItems = ''
         for (var i = 0; i < options.length; i++) {
            selectItems += '<li type="button" class="select-new__item"  title="' + options[i].text + '" data-value="' + options[i].value + '">' + options[i].text + '</li>'
            if (options[i].hasAttribute('class')) {
               const optionClass = options[i].getAttribute('class')
               cSelectCurrent.classList.add(optionClass)
               options[i].removeAttribute('class')
            }
         }
         cSelectList.innerHTML = selectItems
         x(), y();
      }

      const toggleClass = (event) => {
         if (event.code) {
            if (event.code === 'Escape') {
               cSelect.classList.remove('_show')
            }
            return false

         }
         cSelect.classList.toggle('_show')


      }

      const currentTextValue = () => {
         cSelectCurrent.textContent = cSelectList.children[0].textContent


      }

      const currentValue = () => {
         const items = cSelectList.children
         for (var el = 0; el < items.length; el++) {
            let selectValue = items[el].getAttribute('data-value')
            let selectText = items[el].textContent
            items[el].addEventListener('click', () => {
               cSelect.classList.remove('_show')
               cSelectCurrent.textContent = selectText
               select.value = selectValue
            })
         }
      }

      const desctopFn = () => {
         cSelectCurrent.addEventListener('click', toggleClass)
         document.addEventListener('keydown', toggleClass)
      }



      /*const mobileFn = () => {
         for (let j = 0; j < selects.length; j++) {
            let mobileSelect = selects[j]
            mobileSelect.addEventListener('change', () => {
               mobileSelect.nextElementSibling.querySelector('.select-new__current').textContent = mobileSelect.value
            })
         }
      }*/
      createCustomDom(currentTextValue, currentValue)



      document.addEventListener('mouseup', (e) => {
         if (!cSelect.contains(e.target)) cSelect.classList.remove('_show')
      })

      detectmob(/*mobileFn,*/ desctopFn)

      function detectmob(/*x,*/ y) {
         y()
         /*if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
         ) {
            x();
         }
         else {
            y();
         }*/
      }
   }
}

