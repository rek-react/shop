var rangeFilter = document.querySelector('.filter-range');

if (rangeFilter) {
   noUiSlider.create(rangeFilter, {
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
   });
   document.addEventListener('change', function (event) {
      if (event.target.closest('#price-from')) {
         let inputValue = event.target.closest('#price-from').value
         rangeFilter.noUiSlider.set([inputValue, null]);
      }
      if (event.target.closest('#price-to')) {
         let inputValue = event.target.closest('#price-to').value
         rangeFilter.noUiSlider.set([null, inputValue]);
      }
   });

}






