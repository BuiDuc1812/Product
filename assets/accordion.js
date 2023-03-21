let arrcodion = document.querySelectorAll('.footer-block--menu');
if(arrcodion){
  accordionDrawer();
}
function accordionDrawer(){
    arrcodion.forEach((item, index)=>{
      window.addEventListener('resize', addOpen(item, index))
    })
}

function addOpen(params, ind){
  var header = params.querySelector('.footer-block__heading');
  if (window.innerWidth < 990) {
    header.addEventListener('click',()=>{ 
      params.classList.toggle('open');
      let description = params.querySelector('.list-unstyled');
      if(params.classList.contains('open')){
        description.style.height = `${description.scrollHeight}px`;
      } else{
        description.style.height = '0';
      }
      removeOpen(ind);
    })
  }
  else {
    console.log("chiu")
  }
}


function removeOpen(i){
    arrcodion.forEach((item, ind)=>{
    if(i != ind){
      item.classList.remove('open');
      let des = item.querySelector('.list-unstyled');
      des.style.height='0';
    }
  })
}
