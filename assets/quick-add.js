if (!customElements.get("quick-add-modal")) {
  customElements.define(
    "quick-add-modal",
    class QuickAddModal extends ModalDialog {
      constructor() {
        super();
        this.modalContent = this.querySelector('[id^="QuickAddInfo-"]');
      }

      hide() {
        super.hide();
      }

      show(opener) {
        // fetch(`${opener.getAttribute('data-product-url')}?view=ajax`,{
        //   headers : {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //   }
        // })
        //   .then((response) => response.json())
        //   .then((response) => {
        //     const productItem = response.product;
        super.show(opener);
        // this.querySelector('.change-variant').addEventListener('change', this.onChangeVariant(productItem));
        // })
      }

      // onChangeVariant(product) {
      //   // this.updateOption();
      //   this.updateIdVariant(product);
      //   this.updateVariant();
      // }

      // updateOption() {
      //   const fieldsets = Array.from(this.querySelectorAll('fieldset'));
      //   this.options = fieldsets.forEach((fieldset) => {
      //     const arrVariant = Array.from(fieldset.querySelectorAll('input'));
      //     // console.log(arrVariant)
      //     // arrVariant.map(item=>console.log(item));
      //     // return arrVariant.find(checkEd(arrVariant)).value;
      //   });
      // }

      // // checkEd(listVariant){
      // //   listVariant.map(item => console.log*item);
      // // }
      // updateIdVariant(product) {
      //   this.currentVariant = this.getVariantData(product).find((variant) => {
      //     // return !variant.options.map((option, index) => {
      //     //   return this.options[index] === option;
      //     // }).includes(false);
      //   });
      // }

      // getVariantData(product){
      //   this.variantData = product.variants;
      //   return this.variantData;
      // }

      // updateVariant(){
      //   const selectedOptionOneVariants = this.variantData.filter(variant => this.querySelector(':checked').value === variant.option1);
      //   console.log(selectedOptionOneVariants);

      //   const inputWrappers = [...this.querySelectorAll('.product-form__input')];
      //   inputWrappers.forEach((option, index) => {
      //     if (index === 0) return;
      //     const optionInputs = [...option.querySelectorAll('input[type="radio"], option')]

      //     const previousOptionSelected = inputWrappers[index - 1].querySelector(':checked').value;
      //     const availableOptionInputsValue = selectedOptionOneVariants.filter(variant => variant.available && variant[`option${ index }`] === previousOptionSelected).map(variantOption => variantOption[`option${ index + 1 }`]);
      //     this.setInputAvailability(optionInputs, availableOptionInputsValue)
      //   });
      // }

      // setInputAvailability(listOfOptions, listOfAvailableOptions) {
      //   listOfOptions.forEach(input => {
      //     if (listOfAvailableOptions.includes(input.getAttribute('value'))) {
      //       input.innerText = input.getAttribute('value');
      //     } else {
      //       input.innerText = window.variantStrings.unavailable_with_option.replace('[value]', input.getAttribute('value'));
      //     }
      //   });
      // }
    }
  );
}
