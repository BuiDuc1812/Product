function swatch(){
    let colorSwatch = document.querySelectorAll('.color-swatch');
    colorSwatch.forEach(item=>{
        let colorVariant = item.querySelectorAll('.color-variant');
        getHandle(colorVariant);
    })
}

function getHandle(btn){
    btn.forEach((item, index)=>{
        item.addEventListener('click',()=>{
            item.classList.toggle('choose');
            removeChoose(btn, index);
            let handleLink = item.getAttribute('handle');
        })  
    })
}

function removeChoose(btn, ind){
    btn.forEach((item, i)=>{
        if(i != ind){
            item.classList.remove('choose');
        }
    })
}

swatch();