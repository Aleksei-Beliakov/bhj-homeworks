const reveals = Array.from(document.querySelectorAll('.reveal'));

reveals.forEach((item) => {
  setInterval(() => {
    const { top, bottom } = item.getBoundingClientRect();
    if(bottom < 0) {
        item.classList.remove('reveal_active');
    } else if(top > window.innerHeight) {
        item.classList.remove('reveal_active');
    } else {
        item.classList.add('reveal_active');
    }
  }, 1000);
});