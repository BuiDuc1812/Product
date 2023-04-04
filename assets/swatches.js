// function swatch(){
//     let colorSwatch = document.querySelectorAll('.color-swatch');
//     colorSwatch.forEach(item=>{
//         var parrent = item.parentNode;
//         parrent.querySelector('.handlelink').addEventListener('change',(e)=>{
//             parrent.querySelector('.handlelink').href='handleLink'
//         });
//         let colorVariant = item.querySelectorAll('.color-variant');
//         getHandle(colorVariant);
//     })
// }

// function getHandle(btn){
//     btn.forEach((item, index)=>{
//         item.addEventListener('click',()=>{
//             item.classList.toggle('choose');
//             removeChoose(btn, index);
//             let handleLink = item.getAttribute('handle');
//             // changeHandleLink(handleLink);
//         })  
//     })
// }

// function removeChoose(btn, ind){
//     btn.forEach((item, i)=>{
//         if(i != ind){
//             item.classList.remove('choose');
//         }
//     })
// }

// // function changeHandleLink(link){
// //     let handleHref = document.querySelector()
// // }
// swatch();


class swatches {
    constructor(){
        this.colorSwatch = document.querySelectorAll('.color-swatch');
        this.colorSwatch.forEach(item=>{
            this.colorVariant = item.querySelectorAll('.color-variant');
            this.getHandle(this.colorVariant);
        })
    }

    
    getHandle(btn){
        this.parrent = btn.parentNode;
        btn.forEach((item, index)=>{
            item.addEventListener('click',()=>{
                item.classList.add('choose');
                this.removeChoose(btn, index);
                this.handleLink = item.getAttribute('handle');
                this.parrent.querySelector('.handlelink').setAttribute('href',"/products/"+this.handleLink);
            })  
        })
    }

    removeChoose(btn, ind){
        btn.forEach((item, i)=>{
            if(i != ind){
                item.classList.remove('choose');
            }
        })
    }
}

Swatches = new swatches()