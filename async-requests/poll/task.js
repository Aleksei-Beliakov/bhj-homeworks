const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    if(xhr.status === 200) {
      let titleText = xhr.response.data.title;
      let answerTexts = xhr.response.data.answers;

      pollTitle.textContent = titleText;
      answerTexts.forEach(answerText => {
        pollAnswers.insertAdjacentHTML('beforeend',
        `<button class="poll__answer">${answerText}</button>`
        );
      });

      const answerButtons = document.querySelectorAll('.poll__answer')
      answerButtons.forEach(answerButton => {
        answerButton.addEventListener('click', () => {
          alert('Спасибо, ваш голос засчитан!');
        });
      });
    }
  }
});