let timer = document.getElementById('timer');
let counter = +timer.textContent;

setInterval(function() {
  if(counter > 0) {
      counter -= 1;
      timer.textContent = `${counter}`;
  } else if(counter === 0) {
      alert('Вы победили в конкурсе');
  }
}, 1000);