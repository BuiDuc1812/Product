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
                this.parent.querySelector('.handlelink').href = "/products/"+this.handleLink;
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
        this.liProduct = parent.parentNode.parentNode;
        this.liProduct.querySelector('.change-img').srcset = data.image;
        this.liProduct.querySelector('.handlelink').innerHTML = data.title;
        this.liProduct.querySelector('.change-quick').setAttribute('value',data.variant[0].id);
        this.btnQuickAdd = this.liProduct.querySelector('.quick');
        this.btnSoul = this.liProduct.querySelector('.soul');
        if (data.available) {
            this.btnSoul.classList.add('hidden');
            this.btnQuickAdd.classList.remove('hidden');
            this.btnQuickAdd.setAttribute('idvariant',data.id);
            this.btnQuickAdd.setAttribute('quantity',data.variant[0].inventory_quantity);
        } else {
            this.btnSoul.classList.remove('hidden');
            this.btnQuickAdd.classList.add('hidden');
        }

        this.priceSale = this.liProduct.querySelector('.price__sale');
        this.priceRegular = this.liProduct.querySelector('.price__regular');
        
        if(data.compare_at_price){
            this.priceRegular.style.display = 'none';
            this.priceSale.style.display = 'flex';
            this.priceSale.style.flexDirection = "column";
            this.liProduct.querySelector('.change-pricesale').innerHTML = data.price;
            this.liProduct.querySelector('.change-pricesale-compare').innerHTML = data.compare_at_price;
        } else {
            this.liProduct.querySelector('.change-price-regular').innerHTML = data.price;
            this.priceRegular.style.display = 'block';
            this.priceSale.style.display = 'none';
        }
    }
}

Swatches = new swatches()