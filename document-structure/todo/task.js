const form = document.querySelector('.tasks__control');
const input = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(input.value.length) {
    taskList.insertAdjacentHTML('beforeEnd',
     `<div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`
    );
    form.reset();
  }
  let tasksRemove = Array.from(document.querySelectorAll('.task__remove'));
  tasksRemove.forEach((taskRemove) => {
    taskRemove.addEventListener('click', () => {
      taskRemove.parentElement.remove();
    });
  });
});