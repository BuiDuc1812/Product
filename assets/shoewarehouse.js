class product{
    constructor(){
        this.productab = document.querySelector('.product-tabs');
        this.productTabs(this.productab);
    }
    productTabs(param){
        let titleTabs = param.querySelectorAll('.tabs-title');
        let contentTabs = param.querySelectorAll('.data-tabs');
        titleTabs.forEach(item=>{
            let attribute = item.getAttribute("data-title-name");
            let content = param.querySelector('[data-block-name='.concat(attribute,']'));
            item.addEventListener('click',function(){
                titleTabs.forEach(item=>{
                    item.classList.remove('actives');
                })
                contentTabs.forEach(item=>{
                    item.classList.add('hidden');
                })
                item.classList.add('actives');
                content.classList.remove('hidden');
            })
        })
    }
}

Product = new product();

var init = false;
var swiper = '';
function swiperAnnouncement() {
    if (window.innerWidth < 750) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper', {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
window.addEventListener('resize', swiperAnnouncement);