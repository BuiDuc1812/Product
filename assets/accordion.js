let arrcodion = document.querySelectorAll('.footer-block--menu');
if(arrcodion){
    accordionDrawer();
}
function accordionDrawer(){
  arrcodion.forEach((item, index)=>{
    window.addEventListener('resize',addOpen(item, index))
  })
}

function addOpen(params, ind){
  var header = params.querySelector('.footer-block__heading');
  if (window.innerWidth < 990) {
    console.log(header, ind)
    // header.addEventListener ('click',()=>{ 
    //   params.classList.toggle('open');
    //   let description = params.querySelector('.over');
    //   if(params.classList.contains('open')){
    //     params.querySelector('.down').classList.add('turn-off');
    //     params.querySelector('.up').classList.remove('turn-off');
    //     description.style.height = `${description.scrollHeight}px`;
    //   } else{
    //     params.querySelector('.down').classList.remove('turn-off');
    //     params.querySelector('.up').classList.add('turn-off');
    //     description.style.height = '0';
    //   }
    //   removeOpen(ind);
    // })
  }
  else {
    console.log('false')
  }
}

function removeOpen(i){
    arrcodion.forEach((item, ind)=>{
    if(i != ind){
      item.classList.remove('open');
      let des = item.querySelector('.list-unstyled');
      item.querySelector('.down').classList.remove('turn-off');
      item.querySelector('.up').classList.add('turn-off');  
      des.style.height='0';
    }
  })
}
