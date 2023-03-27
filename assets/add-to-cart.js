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
                // const formData = new FormData(item);
                // if (cartDrawer) {
                //     formData.append('sections', cartDrawer.getSectionsToRender().map((section) => section.id));
                //     formData.append('sections_url', window.location.pathname);
                //     cartDrawer.setActiveElement(document.activeElement);
                // }    
                fetch(window.Shopify.routes.root + 'cart/add.js', config)
                .then(response => {
                    return response.json();                  
                })
                .then(dataConfig => {
                    console.log(dataConfig); 
                    cartDrawer.classList.add('active')
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            })
        })
    }
}
quickView()

function loadDataToCart(){

}
