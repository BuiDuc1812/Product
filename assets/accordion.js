let arrcodion = document.querySelectorAll('.footer-block--menu');
console.log(arrcodion)
console.log('asfasfas')



// var accordion = document.querySelectorAll('.accordion');
// if(accordion){
//   accordionDrawer()
// }
// function accordionDrawer(){
//   accordion.forEach((item, index)=>{
//     addOpen(item,index)
//   })
// }
// function addOpen(params, ind){
//   var header = params.querySelector('.accordion-header');
//   header.addEventListener('click',()=>{
//     params.classList.toggle('open');
//     let description = params.querySelector('.accordion-description');
//     if(params.classList.contains('open')){
//       params.querySelector('.down').classList.add('turn-off');
//       params.querySelector('.up').classList.remove('turn-off');
//       description.style.height = `${description.scrollHeight}px`;
//     } else{
//       description.style.height = '0';
//       params.querySelector('.down').classList.remove('turn-off');
//       params.querySelector('.up').classList.add('turn-off');
//     }
//     removeOpen(ind);
//   })
// }

// function removeOpen(i){
//   accordion.forEach((item, ind)=>{
//     if(i != ind){
//       item.classList.remove('open');
//       let des = item.querySelector('.accordion-description');
//       des.style.height='0';
//       item.querySelector('.down').classList.remove('turn-off');
//       item.querySelector('.up').classList.add('turn-off');
//     }
//   })
// }
