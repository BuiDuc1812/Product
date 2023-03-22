class product{
    constructor(){
        this.productab = document.querySelector('.product-tabs');
        this.productTabs(this.productab);
        this.init = false;
        this.swiper = '';
        window.addEventListener('resize', this.mediaImg);
    }
    productTabs(param){
        let titleTabs = param.querySelectorAll('.tabs-title');
        let contentTabs = param.querySelectorAll('.data-tabs');
        titleTabs.forEach(item=>{
            let attribute = item.getAttribute("data-title-name");
            let content = param.querySelector('[data-block-name='.concat(attribute,']'));
            item.addEventListener('click',function(){
                titleTabs.forEach(item=>{
                    item.classList.remove('active');
                })
                contentTabs.forEach(item=>{
                    item.classList.add('hidden');
                })
                item.classList.add('active');
                content.classList.remove('hidden');
            })
        })
    }

    mediaImg(){
        if (window.innerWidth < 750) {
            if (!this.init) {
               this.init = true;
                this.swiper = new Swiper('.swiper', {
                    slidesPerView: 1,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                });
            }
        } else if (this.init) {
            this.swiper.destroy();
            this.init = false;
        }
    }
}

Product = new product();




// let productTabs = document.querySelector('.product-tabs');
// if (productTabs) {
//     let titleTabs = productTabs.querySelectorAll('.tabs-title');
//     let contentTabs = productTabs.querySelectorAll('.data-tabs');
//     titleTabs.forEach(item=>{
//         let attribute = item.getAttribute("data-title-name");
//         let content = productTabs.querySelector('[data-block-name='.concat(attribute,']'));
//         item.addEventListener('click',function(){
//             titleTabs.forEach(item=>{
//                 item.classList.remove('active');
//             })
//             contentTabs.forEach(item=>{
//                 item.classList.add('hidden');
//             })
//             item.classList.add('active');
//             content.classList.remove('hidden');
//         })
//     })
// }

// var init = false;
// var swiper = '';
// function swiperAnnouncement() {
//     if (window.innerWidth < 750) {
//         if (!init) {
//             init = true;
//             swiper = new Swiper('.swiper', {
//                 slidesPerView: 1,
//                 pagination: {
//                     el: '.swiper-pagination',
//                     clickable: true,
//                 }
//             });
//         }
//     } else if (init) {
//         swiper.destroy();
//         init = false;
//     }
// }
// window.addEventListener('resize', swiperAnnouncement);