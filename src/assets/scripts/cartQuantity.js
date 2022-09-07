
class Quantityes {
   constructor() {
      this.quantityes = document.querySelectorAll('#quantity')
   }
   init() {
      this.input(this.quantityes)
   }
   input(quantityes) {
      quantityes.forEach(quantitye => {
         const quantityeInput = quantitye.querySelector('input')
         const inputMax = Number(quantityeInput.dataset.max)
         const inputMin = Number(quantityeInput.dataset.min)
         this.changeInput(quantityeInput, quantitye, inputMax, inputMin)
      });
   }
   changeInput(quantityeInput, quantitye, inputMax, inputMin) {
      quantitye.addEventListener('click', (event) => {
         const arrowPrev = event.target.closest('[data-quantity="arrow-prev"]')
         const arrowNext = event.target.closest('[data-quantity="arrow-next"]')
         if (arrowNext) {
            if (quantityeInput.value >= inputMax) return
            ++quantityeInput.value
            this.productquantitye(quantitye, quantityeInput)

         }
         if (arrowPrev) {
            if (quantityeInput.value == inputMin) return
            --quantityeInput.value
            this.productquantitye(quantitye, quantityeInput)
         }

      })
      quantityeInput.addEventListener('input', (event) => {
         let quantityInputValue = event.target.value.replace(/[^\d]/g, '');
         if (quantityInputValue <= inputMin) {
            event.target.value = inputMin
         } else if (quantityInputValue > inputMax) {
            event.target.value = inputMax
         } else {
            event.target.value = quantityInputValue
         }
         this.productquantitye(quantitye, quantityeInput)

      })
   }
   productquantitye(quantitye, quantityeInput) {
      const subTotal = quantitye.parentElement.querySelector('[data-subtotal]')
      if (subTotal) {
         var textSubTotal = subTotal.dataset.subtotal.replace(/\s/g, '')
         var quantityeInputValue = quantityeInput.value
         this.sumSubTotal(subTotal, textSubTotal, quantityeInputValue)
      }
   }
   sumSubTotal(subTotal, textSubTotal, quantityeInputValue) {
      subTotal.textContent = parseInt(textSubTotal) * parseInt(quantityeInputValue)
      this.total()
   }
   total() {
      const total = document.querySelector('[data-total]')
      const subTotals = document.querySelectorAll('[data-subtotal]')
      let valueSubtotals = 0
      subTotals.forEach(item => {
         const praceNumber = Number(item.textContent.split('\n')[0].replace(/\s/g, ''))
         valueSubtotals += praceNumber
      });
      total.textContent = valueSubtotals
   }
}
export default new Quantityes()