class swatches {
    constructor(){
        this.getElementSwatch();
    }
    getElementSwatch(){
        this.colorSwatch = document.querySelectorAll('.color-swatch');
        this.colorSwatch.forEach(item=>{
            this.colorVariant = item.querySelectorAll('.color-variant');
            this.getHandleProduct(this.colorVariant);
        })
    }

    getHandleProduct(btn){
        btn.forEach((item)=>{
            item.addEventListener('click',()=>{
                this.removeChoose(btn);
                this.parent = item.parentNode.parentNode;
                item.classList.add('choose');
                this.handleLink = item.getAttribute('handle');
                this.getDataProduct(this.handleLink,this.parent);
                this.parent.querySelector('.handlelink').href =`/products/${this.handleLink}`;
            })  
        })
    }

    removeChoose(btn){
        btn.forEach((item)=>{
            item.classList.remove('choose');
        })
    }

    getDataProduct(product, node){
        fetch(`/products/${product}?view=ajax`)
        .then(res => {
            return res.json();
        }) 
        .then(data => {
            this.changeDataProduct(data, node);
        }) 
    }

    changeDataProduct(data, parent) {
        const liProduct = parent.parentNode.parentNode;
        const btnQuickAdd = liProduct.querySelector('.quick');
        const btnSoul = liProduct.querySelector('.soul');
        const priceSale = liProduct.querySelector('.price__sale');
        const priceRegular = liProduct.querySelector('.price__regular');

        liProduct.querySelector('.change-img').srcset = data.image;
        liProduct.querySelector('.handlelink').innerHTML = data.title;
        liProduct.querySelector('.change-quick').setAttribute('value',data.variant[0].id);
        
        if (data.available) {
            btnSoul.classList.add('hidden');
            btnQuickAdd.classList.remove('hidden');
            btnQuickAdd.setAttribute('idvariant',data.id);
            btnQuickAdd.setAttribute('quantity',data.variant[0].inventory_quantity);
        } else {
            btnSoul.classList.remove('hidden');
            btnQuickAdd.classList.add('hidden');
        }

        if(data.compare_at_price){
            priceRegular.style.display = 'none';
            priceSale.style.display = 'flex';
            liProduct.querySelector('.change-pricesale').innerHTML = data.price;
            liProduct.querySelector('.change-pricesale-compare').innerHTML = data.compare_at_price;
        } else {
            liProduct.querySelector('.change-price-regular').innerHTML = data.price;
            priceRegular.style.display = 'block';
            priceSale.style.display = 'none';
        }

        liProduct.querySelector('.collection_vendor').innerHTML = data.vendor;
    }
}

Swatches = new swatches()