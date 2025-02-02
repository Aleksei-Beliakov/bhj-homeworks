const form = document.querySelector('.tasks__control');
const input = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(input.value.trim().length) {
    taskList.insertAdjacentHTML('beforeEnd',
     `<div class="task">
        <div class="task__title">
          ${input.value.trim()}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`
    );
    form.reset();
  }
});

taskList.addEventListener('click', (event) => {
  if(event.target.classList.contains('task__remove')) {
    event.target.parentElement.remove();
  }
});