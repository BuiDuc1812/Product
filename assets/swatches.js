class swatches {
    constructor(){
        this.colorSwatch = document.querySelectorAll('.color-swatch');
        this.colorSwatch.forEach(item=>{
            this.colorVariant = item.querySelectorAll('.color-variant');
            this.getHandle(this.colorVariant);
        })
    }

    getHandle(btn){
        btn.forEach((item, index)=>{
            item.addEventListener('click',()=>{
                this.parent = item.parentNode.parentNode;
                item.classList.add('choose');
                this.removeChoose(btn, index);
                this.handleLink = item.getAttribute('handle');
                this.getData(this.handleLink,this.parent);
                this.parent.querySelector('.handlelink').href = "/products/"+this.handleLink;
            })  
        })
    }

    removeChoose(btn, ind){
        btn.forEach((item, i)=>{
            if(i != ind){
                item.classList.remove('choose');
            }
        })
    }

    getData(product, node){
        fetch('/products/'+ product +'?view=ajax',{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            return res.json();
        }) 
        .then(data => {
            this.changeData(data, node)
        }) 
    }

    changeData(data, parent){
        this.liProduct = parent.parentNode.parentNode;
        this.liProduct.querySelector('.change-img').srcset = data.product.image.src;
        this.liProduct.querySelector('.handlelink').innerHTML = data.product.title;
        this.firstVariant = data.product.variants[0]
        this.liProduct.querySelector('.change-quick').setAttribute('value',this.firstVariant.id);
        // if (this.firstVariant.available) {
        //     this.liProduct.querySelector('.soul-tag').style.display = 'none';

        //     // this.liProduct.querySelector('.soul').classList.add('hidden');
        //     // this.liProduct.querySelector('.quick').classList.remove('hidden');
        //     // this.liProduct.querySelector('.quick').setAttribute('idvariant',this.firstVariant.id),
        //     // this.liProduct.querySelector('.quick').setAttribute('quantity',this.firstVariant.inventory_quantity)
        //     // console.log(this.firstVariant.inventory_quantity)
        // } else {
        //     // this.liProduct.querySelector('.soul').classList.remove('hidden');
        //     // this.liProduct.querySelector('.quick').classList.add('hidden');
        // }

        if(this.firstVariant.compare_at_price){
            this.liProduct.querySelector('.price__regular').style.display = 'none';
            this.liProduct.querySelector('.price__sale').style.display = 'flex';
            this.liProduct.querySelector('.price__sale').style.flexDirection = "column";
            this.liProduct.querySelector('.change-pricesale').innerHTML = `$${this.firstVariant.price}`;
            this.liProduct.querySelector('.change-pricesale-compare').innerHTML = `$${this.firstVariant.compare_at_price}`;
        } else {
            this.liProduct.querySelector('.change-price-regular').innerHTML = `$${this.firstVariant.price}`;
            this.liProduct.querySelector('.price__regular').style.display = 'block';
            this.liProduct.querySelector('.price__sale').style.display = 'none';
        }
    }
}

Swatches = new swatches()