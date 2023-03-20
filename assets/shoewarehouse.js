let productTabs = document.querySelector('.product-tabs');
    if (productTabs) {
        let titleTabs = productTabs.querySelectorAll('.tabs-title');
        let contentTabs = productTabs.querySelectorAll('.data-tabs');
        titleTabs.forEach(item=>{
            let attribute = item.getAttribute("data-title-name");
            let content = productTabs.querySelector('[data-block-name='.concat(attribute,']'));
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

    class VariantSelects extends HTMLElement {
        constructor(){
            console.log(this)
        }
    }
    customElements.define('variant-selects', VariantSelects);

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
swiperAnnouncement();
window.addEventListener('resize', swiperAnnouncement);