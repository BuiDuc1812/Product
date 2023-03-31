var cartDrawer = document.querySelector('cart-drawer');

function quickView(){
    var quickForm = document.querySelectorAll('.form-quick_view');

    if (quickForm) {
        quickForm.forEach(item=>{
            var btnSubmit = item.querySelector('.ProductSubmitButton');
            btnSubmit.setAttribute('aria-haspopup', 'dialog');
            item.addEventListener('submit',(e)=>{
                e.preventDefault();
                // checkQuanty(btnSubmit).then(()=>{
                //     ajax(item);
                // });
                cancelBtn(btnSubmit, item)
            })
        })
    }
}

quickView()

function cancelBtn(btn, item){
    var quantity = btn.getAttribute('quantity');
    var variantId = btn.getAttribute('idvariant');
    var quantityCart = cartDrawer.querySelector('input[data-quantity-variant-id="'+`${variantId}`+'"]');

    if(quantityCart){
        if(parseInt(quantityCart.value) < parseInt(quantity)) {
            ajax(item)
        } 
    } else {
        ajax(item)
    }
}

function ajax(form){
    const formData = new FormData(form);
    formData.append('sections', cartDrawer.getSectionsToRender().map((section) => section.id));
    formData.append('sections_url', window.location.pathname);   
 
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
}