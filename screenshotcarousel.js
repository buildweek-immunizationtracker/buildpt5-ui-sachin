class Tab {
    constructor(element) {
      
      this.element = element
      
      
       this.data = element.dataset.tabs
       this.itemElement = document.querySelector(`.screenshot[data-tabs='${this.data}']`) 
      this.screenshotItem = new Screenshot(this.itemElement)
      this.element.addEventListener('click', this.select.bind(this))
    }
  
    select() {
       const links = document.querySelectorAll('.tab')
      Array.from(links).forEach(function(link){  
      
      link.classList.remove('tab-active-tab')
      
      })
       this.element.classList.add ('tab-active-tab')
      this.screenshotItem.select()
    }
  }
  
  class Screenshot {
    constructor(element) {
      this.element = element
    }
  
    select() {
      const items =  document.querySelectorAll('.screenshot')
      Array.from(items).forEach(function(item){
      item.classList.remove('screenshot-selected')})
      this.element.classList.add('screenshot-selected') 
    }
  }
  
  
  
  const links = document.querySelectorAll('.tab')
  links.forEach(link => new Tab(link))