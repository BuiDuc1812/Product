var cartDrawer = document.querySelector('cart-drawer');

function quickView(){
    var quickForm = document.querySelectorAll('.form-quick_view');

    if (quickForm) {
        quickForm.forEach(item=>{
            var btnSubmit = item.querySelector('.ProductSubmitButton');
            btnSubmit.setAttribute('aria-haspopup', 'dialog');
            item.addEventListener('submit',(e)=>{
                e.preventDefault();
                const formData = new FormData(item);
                    formData.append('sections', cartDrawer.getSectionsToRender().map((section) => section.id));
                    formData.append('sections_url', window.location.pathname);   
                    
                checkInventory(btnSubmit)
                fetch(window.Shopify.routes.root + 'cart/add.js', {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    return response.json();
                })
                .then(response => {
                    cartDrawer.renderContents(response);
                    cartDrawer.classList.add('active'); 
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            })
        })
    }
}
quickView()


function checkInventory (btn){
    var quantity = btn.getAttribute('quantity');
    console.log(quantity);
}