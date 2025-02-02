let hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltips.forEach((hasTooltip) => {
  hasTooltip.addEventListener('click', (event) => {
    event.preventDefault();
    let rect = hasTooltip.getBoundingClientRect();
    //let rectX = rect.x + window.pageXOffset
    //let rectY = rect.y + window.pageYOffset;

    if(!document.querySelector('.tooltip')) {
        hasTooltip.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active" style="left: ${rect.x}px; top: ${rect.y - 31}px">${hasTooltip.title}</div>`);
        let tooltip = document.querySelector('.tooltip');
        setTimeout(() => tooltip.remove(), 2000);
    }
  });
});