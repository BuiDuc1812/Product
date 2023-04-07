if (!customElements.get('quick-add-modal')) {
  customElements.define('quick-add-modal', class QuickAddModal extends ModalDialog {
    constructor() {
      super();
      this.modalContent = this.querySelector('[id^="QuickAddInfo-"]');
    }

    hide() {
      super.hide();
    }

    show(opener) {

      fetch(`${opener.getAttribute('data-product-url')}?view=ajax`,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((response) => {
          const productItem = response.product;
          // this.setDataHtml(productItem)
          super.show(opener);
        })
    }

    // setDataHtml(product) {
    //   const headerPopup = this.querySelector('.header-product_popup');
    //   const ulImages =  headerPopup.querySelector('ul');
    //   product.images.map(item=>{
    //     const liImage = document.createElement('li');
    //     liImage.classList.add('swiper-slide');
    //     const srcimg = document.createElement('img');
    //     srcimg.src = item.src;
    //     liImage.appendChild(srcimg);
    //     ulImages.appendChild(liImage);
    //   })
    // }
  });
}
