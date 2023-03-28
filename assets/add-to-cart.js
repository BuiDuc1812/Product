var cartDrawer = document.querySelector('cart-drawer');

function quickView(){
    var quickForm = document.querySelectorAll('.form-quick_view');

    if (quickForm) {
        quickForm.forEach(item=>{
            var btnSubmit = item.querySelector('.ProductSubmitButton');
            btnSubmit.setAttribute('aria-haspopup', 'dialog');
            item.addEventListener('submit',(e)=>{
                e.preventDefault();
                const product = {
                    'items':[{
                        'id': item.getAttribute('product_id'),
                        'quantity': 1
                    }]
                }
                const config = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(product)
                }
                fetch(window.Shopify.routes.root + 'cart/add.js', config)
                .then(response => {
                    return response.json();                  
                })
                .then(dataConfig => {
                    var data = dataConfig.items[0];
                    cartDrawer.renderContents(data)
                    cartDrawer.classList.add('active');
                })
                // .finally(response=>{
                //     cartDrawer.classList.add('active');
                // })
                .catch((error) => {
                    console.error('Error:', error);
                });
            })
        })
    }
}
quickView()

// function loadDataToCart(form){
//     const config = fetchConfig('javascript');
//     config.headers['X-Requested-With'] = 'XMLHttpRequest';
//     delete config.headers['Content-Type'];

//     const formData = new FormData(form);

//     formData.append('sections', cartDrawer.getSectionsToRender().map((section) => section.id));
//     formData.append('sections_url', window.location.pathname);
//     cartDrawer.setActiveElement(document.activeElement);

//     config.body = formData;
// }


