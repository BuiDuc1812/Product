function quickView(){
    var quickForm = document.querySelectorAll('.form-quick_view');
    if (quickForm) {
        quickForm.forEach(item=>{
            // console.log(item.getAttribute('product_id'))
            item.addEventListener('submit',(e)=>{
                e.preventDefault();
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
                .catch((error) => {
                    console.error('Error:', error);
                });
            })
        })
    }
}
quickView()