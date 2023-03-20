let arrcodion = document.querySelectorAll('.footer-block--menu');


if(arrcodion){
    window.addEventListener('resize', accordionDrawer)
}
function accordionDrawer(){
    if (window.innerWidth < 990) {
        arrcodion.forEach((item, index)=>{
            addOpen(item,index)
        })
    }
}

function addOpen(params, ind){
  var header = params.querySelector('.footer-block__heading');
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


function removeOpen(i){
    arrcodion.forEach((item, ind)=>{
    if(i != ind){
      item.classList.remove('open');
      let des = item.querySelector('.list-unstyled');
      des.style.height='0';
    }
  })
}
