const fontSizes = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

for(let i = 0; i < fontSizes.length; i += 1) {
  fontSizes[i].addEventListener('click', function(event) {
    event.preventDefault();
    for(let j = 0; j < fontSizes.length; j += 1) {
      if(fontSizes[j].classList.contains('font-size_active')) {
        fontSizes[j].classList.remove('font-size_active');
      }
    }
    fontSizes[i].classList.add('font-size_active');

    if(fontSizes[i].classList.contains('font-size_small') && fontSizes[i].classList.contains('font-size_active')) {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    } else if(fontSizes[i].classList.contains('font-size_big') && fontSizes[i].classList.contains('font-size_active')) {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    } else {
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
    }
  });
}