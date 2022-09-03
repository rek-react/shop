const TabItemSelector = '.tabs__tab'
const ContentItemSelector = '[data-itemtab]'

class TabsManager {
   constructor() {
      this.tabs = []
      this.navNode = document.querySelector('#tabs')
      this.activeTab = null
   }
   init() {
      if (this.navNode) {
         this.initFromHtml(this.navNode)
         this.activateTab(this.tabs[0])
      }
   }
   initFromHtml(navNode) {
      const headers = navNode.querySelectorAll(TabItemSelector)
      const contents = navNode.querySelectorAll(ContentItemSelector)

      for (var i = 0; i < headers.length; i++) {
         this.registerTab(headers[i], contents[i])
      }
   }

   registerTab(header, content) {
      const tab = new TabItem(header, content)
      tab.onActivate(() => this.activateTab(tab))
      this.tabs.push(tab)
   }

   activateTab(tabItem) {
      if (this.activeTab) {
         this.activeTab.setActive(false)
      }

      this.activeTab = tabItem;
      this.activeTab.setActive(true)
   }

}

const ActiveTabHeaderClass = '_active'
const ActiveTabContentClass = '_show'

class TabItem {
   constructor(header, content) {
      this.header = header
      this.content = content
   }
   onActivate(action) {
      this.header.addEventListener('click', () => action(this))
   }
   setActive(value) {
      this.header.classList.toggle(ActiveTabHeaderClass, value)
      this.content.classList.toggle(ActiveTabContentClass, value)
   }
}


export default new TabsManager()