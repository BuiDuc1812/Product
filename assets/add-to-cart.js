var cartDrawer = document.querySelector('cart-drawer');

function quickView(){
    var quickForm = document.querySelectorAll('.form-quick_view');

    if (quickForm) {
        quickForm.forEach(item=>{
            console.log(item)
            var btnSubmit = item.querySelector('.ProductSubmitButton');
            btnSubmit.setAttribute('aria-haspopup', 'dialog');
            item.addEventListener('submit',(e)=>{
                e.preventDefault();
                const formData = new FormData(item);
                    formData.append('sections', cartDrawer.getSectionsToRender().map((section) => section.id));
                    formData.append('sections_url', window.location.pathname);
                    cartDrawer.classList.add('active');               
                fetch(window.Shopify.routes.root + 'cart/add.js', {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    return response.json();
                })
                .then(response => {
                    cartDrawer.renderContents(response);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            })
        })
    }
}
quickView()
