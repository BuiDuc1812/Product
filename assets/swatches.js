class swatches {
    constructor(){
        this.colorSwatch = document.querySelectorAll('.color-swatch');
        this.colorSwatch.forEach(item=>{
            this.colorVariant = item.querySelectorAll('.color-variant');
            this.getHandle(this.colorVariant);
        })
    }

    getHandle(btn){
        btn.forEach((item)=>{
            item.addEventListener('click',()=>{
                this.removeChoose(btn);
                this.parent = item.parentNode.parentNode;
                item.classList.add('choose');
                this.handleLink = item.getAttribute('handle');
                this.getData(this.handleLink,this.parent);
                this.parent.querySelector('.handlelink').href = "/products/"+this.handleLink;
            })  
        })
    }

    removeChoose(btn){
        btn.forEach((item)=>{
            item.classList.remove('choose');
        })
    }

    getData(product, node){
        fetch(`/products/${product}?view=ajax`)
        .then(res => {
            return res.json();
        }) 
        .then(data => {
            this.changeData(data, node);
        }) 
    }

    changeData(data, parent) {
        this.liProduct = parent.parentNode.parentNode;
        this.liProduct.querySelector('.change-img').srcset = data.image;
        this.liProduct.querySelector('.handlelink').innerHTML = data.title;
        this.liProduct.querySelector('.change-quick').setAttribute('value',data.variant[0].id);
        if (data.available) {
            this.liProduct.querySelector('.soul').classList.add('hidden');
            this.liProduct.querySelector('.quick').classList.remove('hidden');
            this.liProduct.querySelector('.quick').setAttribute('idvariant',data.id);
            this.liProduct.querySelector('.quick').setAttribute('quantity',data.variant[0].inventory_quantity);
            // console.log(this.firstVariant.inventory_quantity)
        } else {
            // console.log('het')
            this.liProduct.querySelector('.soul').classList.remove('hidden');
            this.liProduct.querySelector('.quick').classList.add('hidden');
        }

        if(data.compare_at_price){
            this.liProduct.querySelector('.price__regular').style.display = 'none';
            this.liProduct.querySelector('.price__sale').style.display = 'flex';
            this.liProduct.querySelector('.price__sale').style.flexDirection = "column";
            this.liProduct.querySelector('.change-pricesale').innerHTML = data.price;
            this.liProduct.querySelector('.change-pricesale-compare').innerHTML = data.compare_at_price;
        } else {
            this.liProduct.querySelector('.change-price-regular').innerHTML = data.price;
            this.liProduct.querySelector('.price__regular').style.display = 'block';
            this.liProduct.querySelector('.price__sale').style.display = 'none';
        }
    }
}

Swatches = new swatches()