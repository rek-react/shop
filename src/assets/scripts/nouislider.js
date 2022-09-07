import noUiSlider from 'nouislider'
import wNumb from 'wnumb'


class NoUiSlider {
   constructor() {
      this.rangeFilter = document.querySelector('.filter-range')
   }

   init() {
      if (this.rangeFilter) {
         noUiSlider.create(this.rangeFilter, {
            start: [0, 100000],
            connect: true,
            step: 1,
            tooltips: [wNumb({
               decimals: 0,
               thousand: '',
            }), wNumb({
               decimals: 0,
               thousand: '',
            })],
            range: {
               'min': 0,
               'max': 200000
            }
         })
         const handleChangePriceForm = (event) => {
            if (event.target.closest('#price-from')) {
               let inputValue = event.target.closest('#price-from').value
               this.rangeFilter.noUiSlider.set([inputValue, null]);
            }
            if (event.target.closest('#price-to')) {
               let inputValue = event.target.closest('#price-to').value
               this.rangeFilter.noUiSlider.set([null, inputValue]);
            }
         }
         document.addEventListener('change', handleChangePriceForm.bind(this))
      }
   }

}

export default new NoUiSlider()
