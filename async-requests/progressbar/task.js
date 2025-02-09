const form = document.querySelector('form');
const progress = document.querySelector('progress');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', (e) => {
    xhr.upload.onprogress = function(e) {
        if(e.lengthComputable) {
          let complete = e.loaded / e.total;
          progress.value = complete;
        }
      };
    
    if(xhr.readyState === xhr.DONE) {
      if(xhr.status >= 200 && xhr.status < 300) {
        alert('Успешно!');
        progress.value = 0;
      }
    }
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  let formData = new FormData(form);
  xhr.send(formData);
});