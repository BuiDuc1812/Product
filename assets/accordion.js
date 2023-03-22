function arrcodion(element) {
  element.classList.toggle('open');
  let description = element.parentNode.querySelector('.over');
  if ( element.classList.contains('open') ) {
    element.querySelector('.down').classList.add('turn-off');
    element.querySelector('.up').classList.remove('turn-off');
    description.style.height = `${description.scrollHeight}px`;
  }
  else {
    element.querySelector('.down').classList.remove('turn-off');
    element.querySelector('.up').classList.add('turn-off');
    description.style.height = '0';
  }
  removeOpen(element);
}

function removeOpen(test){
  let gridAccordion = document.querySelectorAll('.footer-block--menu');
  gridAccordion.forEach(item=>{
    let header = item.querySelector('.footer-block__heading');
    if ( !header.isEqualNode(test) ) {
      header.classList.remove('open');
      header.querySelector('.down').classList.remove('turn-off');
      header.querySelector('.up').classList.add('turn-off');  
      let description = header.parentNode.querySelector('.over');
      description.style.height = '0';
    }
  })
}
