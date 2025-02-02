//Карточки товаров
const products = document.querySelectorAll('.product');
//const productAdds = document.querySelectorAll('.product__add');
const productQuantityValues = document.querySelectorAll('.product__quantity-value');
//Корзина
const cartProducts = document.querySelector('.cart__products');
const productImages = document.querySelectorAll('.product__image');
//Клик на карточке
for(let i = 0; i < products.length; i += 1) {
  products[i].addEventListener('click', (event) => {
    event.preventDefault();
    let productQuantityValue = +productQuantityValues[i].textContent;
    //Уменшение и увеличение количества товара в карточке
    if(event.target.classList.contains('product__quantity-control_dec')) {
        if(productQuantityValue > 1) {
          productQuantityValue -= 1
          productQuantityValues[i].textContent = productQuantityValue;
        }
    } else if(event.target.classList.contains('product__quantity-control_inc')) {
        if(productQuantityValue > 0) {
          productQuantityValue += 1;
          productQuantityValues[i].textContent = productQuantityValue;
        }
    }
    //Клик на кнопке добавления товара в корзину
    if(event.target.classList.contains('product__add')) {
      //Если клик по карточке товара, которого нет в корзине
      if(!cartProducts.querySelector(`[data-id="${products[i].getAttribute('data-id')}"]`)) {
          //data-id="${event.target.closest('.product').dataset.id}" && data-id="${products[i].getAttribute('data-id')}"
          cartProducts.insertAdjacentHTML('beforeend',
           `<div class="cart__product" data-id="${products[i].getAttribute('data-id')}">
              <img class="cart__product-image" src="${productImages[i].getAttribute('src')}">
              <div class="cart__product-count">${productQuantityValues[i].textContent}</div>
            </div>`);
          //Если клик по карточке товара, который есть в корзине
      } else {
          let cartProductQuantity = +cartProducts.querySelector(`[data-id="${products[i].getAttribute('data-id')}"]`).querySelector('.cart__product-count').textContent;
          cartProductQuantity = cartProductQuantity + productQuantityValue;
          cartProducts.querySelector(`[data-id="${products[i].getAttribute('data-id')}"]`).querySelector('.cart__product-count').textContent = cartProductQuantity;
      }
    }
  });
}