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
          super.show(opener);
        })
    }
  });
}
