
let productTabs = document.querySelector('.product-tabs');

if (productTabs) {
    let titleTabs = productTabs.querySelectorAll('.tabs-title');
    let contentTabs = productTabs.querySelectorAll('.data-tabs');
    titleTabs.forEach(item=>{
        let attribute = item.getAttribute("data-title-name");
        let content = productTabs.querySelector('[data-block-name]'.concat(attribute,']'));
        item.addEventListener('click',function(){
            titleTabs.forEach(item=>{
                item.classList.remove('active');
            })
            contentTabs.forEach(item=>{
                item.classList.add('hidden');
            })
            item.classList.add('active');
            item.classList.remove('hidden');
        })
    })
}