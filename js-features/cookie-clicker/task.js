const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let counter = +clickerCounter.textContent;
cookie.addEventListener('click', function() {
  counter += 1;
  clickerCounter.textContent = `${counter}`;
  if(counter % 2 !== 0) {
      cookie.width = 220;
  } else {
      cookie.width = 180;
  }
});