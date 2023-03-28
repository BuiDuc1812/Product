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
                    cartDrawer.classList.add('active');
                    var data = dataConfig.items[0];
                    renderContents(data)
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            })
        })
    }
}
quickView()



function renderContents(parsedState) { 
    cartDrawer.querySelector('.drawer__inner').classList.contains('is-empty') && cartDrawer.querySelector('.drawer__inner').classList.remove('is-empty');
    getSectionTorender().forEach((section=>{
        const sectionElement = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);
        console.log(sectionElement)
        sectionElement.innerHTML = getSectionInnerHTML(section.id,section.selector);
    }))
}
function getSectionInnerHTML(html, selector) {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
}
function getSectionTorender(){
    return [
        {
            id: 'cart-drawer',
            selector: '#CartDrawer'
        }
    ];
}