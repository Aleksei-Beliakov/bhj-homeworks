const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');

for(let i = 0; i < tabs.length; i += 1) {
  tabs[i].addEventListener('click', function() {
    for(let j = 0; j < tabs.length; j += 1)
      if(tabs[j].classList.contains('tab_active')) {
        tabs[j].classList.remove('tab_active');
        tabsContent[j].classList.remove('tab__content_active');
      }
    tabs[i].classList.add('tab_active');
    tabsContent[i].classList.add('tab__content_active');
  })
}