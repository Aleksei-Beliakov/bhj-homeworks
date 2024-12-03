let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let counterDead = +dead.textContent;
let counterLost = +lost.textContent;
let holes = document.querySelectorAll('.hole');

holes.forEach((index) => {
  index.addEventListener('click', function() {
    if(index.classList.contains('hole_has-mole')) {
        counterDead += 1;
        dead.textContent = `${counterDead}`;
        if(counterDead === 10) {
          alert('Победа!');
          counterDead = 0;
          dead.textContent = `${counterDead}`;
          counterLost = 0;
          lost.textContent = `${counterLost}`;
        }
        return;
    } else {
        counterLost += 1;
        lost.textContent = `${counterLost}`;
        if(counterLost === 5) {
          alert('Вы проиграли.');
          counterDead = 0;
          dead.textContent = `${counterDead}`;
          counterLost = 0;
          lost.textContent = `${counterLost}`;
        }
    }
  });
});



