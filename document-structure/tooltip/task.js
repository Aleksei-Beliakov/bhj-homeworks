let hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));
console.log(hasTooltips);

hasTooltips.forEach((hasTooltip) => {
  hasTooltip.addEventListener('click', (event) => {
    event.preventDefault();
    let rect = hasTooltip.getBoundingClientRect();
    //let rectX = rect.x;//  + window.pageXOffset
    //let rectY = rect.y; + window.pageYOffset;
    if(hasTooltip.children.length === 0) {
        hasTooltip.insertAdjacentHTML('beforeEnd', `<div class="tooltip tooltip_active" style="left: ${rect.x}px; top: ${rect.y - 31}px">${hasTooltip.title}</div>`);
      } else {
        let tooltip = document.querySelector('.tooltip');
        tooltip.remove();
    }
    //let tooltip = document.querySelector('.tooltip');
    //setTimeout(() => tooltip.remove(), 2000);
  });
});