const items = document.getElementById('items');
const loader = document.querySelector('.loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json";
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    if(xhr.status === 200) {
      let valutes = xhr.response.response.Valute;
      loader.classList.remove('loader_active');
      for(let valute in valutes) {
        items.insertAdjacentHTML("beforeEnd",
       `<div class="item">
          <div class="item__code">${valutes[valute].CharCode}</div>
          <div class="item__value">${valutes[valute].Value}</div>
          <div class="item__currency">руб.</div>
        </div>`);
      }
    }
  }
});