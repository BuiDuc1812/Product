function accordionDrawer(){
  let blockAccordion = document.querySelector('.footer__blocks-wrapper');
  // console.log(blockAccordion)
  if (blockAccordion) {
    window.addEventListener('resize',addOpen)
  }
}
accordionDrawer();

function addOpen(){
  let arrcodion = document.querySelectorAll('.footer-block--menu');
  if (window.innerWidth < 990) {
    arrcodion.forEach((item, index)=>{
      let header = item.querySelector('.footer-block__heading');
      console.log(header, index)
      header.addEventListener('click',()=>{ 
        header.classList.toggle('open');
        // let description = item.querySelector('.over');
        // if(item.classList.contains('open')){
        //   item.querySelector('.down').classList.add('turn-off');
        //   item.querySelector('.up').classList.remove('turn-off');
        //   description.style.height = `${description.scrollHeight}px`;
        // } else{
        //   item.querySelector('.down').classList.remove('turn-off');
        //   item.querySelector('.up').classList.add('turn-off');
        //   description.style.height = '0';
        // }
        // removeOpen(index);
      })
    })
  }
  else {
    console.log('false')
  }
}

// function removeOpen(i){
//     arrcodion.forEach((item, ind)=>{
//     if(i != ind){
//       item.classList.remove('open');
//       let des = item.querySelector('.list-unstyled');
//       item.querySelector('.down').classList.remove('turn-off');
//       item.querySelector('.up').classList.add('turn-off');  
//       des.style.height='0';
//     }
//   })
// }
