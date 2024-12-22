//const dropdown = document.querySelector('.dropdown');
const list = document.querySelector('.dropdown__list');
const value = document.querySelector('.dropdown__value');
const items = Array.from(document.querySelectorAll('.dropdown__item'));
//const links = Array.from(document.querySelectorAll('.dropdown__link'));


value.addEventListener('click', function() {
  list.classList.add('dropdown__list_active');
});

items.forEach((item) => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    value.textContent = event.target.textContent;
    list.classList.remove('dropdown__list_active');
  });
});