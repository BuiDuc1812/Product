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
        btn.forEach((item, index)=>{
            this.parent = item.parentNode.parentNode;
            item.addEventListener('click',()=>{
                item.classList.add('choose');
                this.removeChoose(btn, index);
                this.handleLink = item.getAttribute('handle');
                this.getData(this.handleLink);
                this.parent.querySelector('.handlelink').href = "/products/"+this.handleLink;
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

    getData(product){
        fetch('/products/'+ product +'?view=ajax',{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            return res.json();
        }) 
        .then(data => {
            console.log(data);
        }) 
    }
}

Swatches = new swatches()