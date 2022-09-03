
import { checkibg } from './ibg.js'
import quantityes from './cartQuantity.js'
import customSelect from './custom-select.js'
import formAside from './form-aside.js'
import modalNav from './modal-nav.js'
import navSide from './nav-side.js'
import nav from './nav.js'
import noUiSlider from './nouislider.js'
import dynamicAdapt from './dynamicAdapt.js'
import search from './search.js'
import swiper from './swiper.js'
import tabs from './tabs.js'
import textarea from './textarea.js'


class App {
    static init() {
        checkibg()
        swiper.init()
        dynamicAdapt.init()
        quantityes.init()
        customSelect.init()
        formAside.init()
        modalNav.init()
        navSide.init()
        nav.init()
        noUiSlider.init()
        search.init()
        tabs.init()
        textarea.init()
    }
}
App.init()