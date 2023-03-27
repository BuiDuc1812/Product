function quickView(){
    var quickForm = document.querySelectorAll('.form-quick_view');
    var cartDrawer = document.querySelector('cart-drawer');
    if (quickForm) {
        quickForm.forEach(item=>{
            var btnSubmit = item.querySelector('.ProductSubmitButton');
            if(cartDrawer)btnSubmit.setAttribute('aria-haspopup', 'dialog');
            item.addEventListener('submit',(e)=>{
                e.preventDefault();
                if(btnSubmit.getAttribute('aria-disabled') === 'true') return;
                btnSubmit.setAttribute('aria-disabled', true);

                const config = fetchConfig('javascript');
                delete config.headers['Accept'];
                const formData = new FormData(item);

                if(cartDrawer){
                    formData.append('sections', cartDrawer.getSectionsToRender().map((section) => section.id));
                    formData.append('sections_url', window.location.pathname);
                    cartDrawer.setActiveElement(document.activeElement);
                }
                let product = {
                    'items':[{
                        'id': item.getAttribute('product_id'),
                        'quantity': 1
                    }]
                };
                config.body = JSON.stringify(product);
                fetch(window.Shopify.routes.root + 'cart/add.js', config)
                .then(response => {
                    return response.json();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            })
        })
    }
}
// quickView()

// function setHearCart(btn){
//     btn.addEventListener('click', (event) => {
//       event.preventDefault();
//       openC(btn)
//     });
//     btn.addEventListener('keydown', (event) => {
//       if (event.code.toUpperCase() === 'SPACE') {
//         event.preventDefault();
//         openC(btn);
//       }
//     });
// }

// function openC(cart){
//     var carDraw = document.querySelector('cart-drawer');
//     if(cart) carDraw.setActiveElement(cart);
//     console.log(carDraw);
// }

// setHearCart();

// function renderContent(params){
//     document.querySelector('.drawer__inner').classList.contains('is-empty') && document.querySelector('.drawer__inner').classList.remove('is-empty');
//     var productId = params.items[0].id
//     getSections().forEach((section=>{
//         const sectionEl = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);
//         // console.log(params.items[0].sections[section.id])
//         // sectionEl.innerHTML = getSectionInner(params.sections[section.id], section.selector);
//     }))
// }

// function getSections(){
//     return [
//         {
//           id: 'cart-drawer',
//           selector: '#CartDrawer'
//         },
//         {
//           id: 'cart-icon-bubble'
//         }
//     ];
// }

// function getSectionInner(html, selector = '.shopify-section') {
//     return new DOMParser()
//       .parseFromString(html, 'text/html')
//       .querySelector(selector).innerHTML;
// }