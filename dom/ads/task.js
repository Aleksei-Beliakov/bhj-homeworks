let rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let count = 1;

setInterval(function() {
  rotatorCases.forEach((item, index) => {
    if(count !== index) {
        item.classList.remove('rotator__case_active');
    } else {
        item.classList.add('rotator__case_active');
    }
  });
  
  count += 1;
  if(count >= rotatorCases.length) {
    count = 0;
  }
}, 1000);