function quickView(){
    var quickForm = document.querySelectorAll('.form-quick_view');
    var cartDrawer = document.querySelector('cart-drawer');

    if (quickForm) {
        quickForm.forEach(item=>{
            var btnSubmit = item.querySelector('.ProductSubmitButton');
            if (cartDrawer) btnSubmit.setAttribute('aria-haspopup', 'dialog');
            item.addEventListener('submit',(e)=>{
                e.preventDefault();
                if(btnSubmit.getAttribute('aria-disabled') === 'true') return;
                btnSubmit.setAttribute('aria-disabled', true);
                const formData =  new FormData(item);
                if(cartDrawer){
                    formData.append('sections', cartDrawer.getSectionsToRender().map((section) => section.id));
                    formData.append('sections_url', window.location.pathname);
                    cartDrawer.setActiveElement(document.activeElement);
                }
                fetch(window.Shopify.routes.root + 'cart/add.js',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'items': [{
                          'id': item.getAttribute('product_id'),
                          'quantity': 1
                        }]
                    })
                })
                .then(response => {
                    return response.json();
                })
                .then(response => {
                    console.log(response)
                    // cartDrawer.renderContents(response)
                    // window.location = window.routes.cart_url;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            })
        })
    }
}
quickView()