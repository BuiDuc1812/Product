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
        fetch(`${opener.getAttribute("data-product-url")}?view=ajax`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            const productItem = response.product;
            this.radios = this.querySelector(".change-variant");
            console.log(productItem);
            this.changeDataPopup(productItem);
            this.priceProduct(productItem);
            super.show(opener);
            this.radios.addEventListener(
              "change",
              this.onChangeVariant(productItem)
            );
          });
      }

      changeDataPopup(product) {
        const ulImg = this.querySelector(".list-img_popup");
        const listLi = [];
        product.images.map((item) => {
          listLi.unshift(`<li class="swiper-slide">
                            <img class="image-p" loading="lazy" width="" height="" src="${item.src}" alt="">
                          </li>`);
        });
        const newImg = `${listLi.join("")}`;
        ulImg.innerHTML = newImg;

        this.querySelector(".popup_vendor").innerHTML = product.vendor;
        this.querySelector(".popup_title").innerHTML = product.title;
      }

      priceProduct(product) {
        const priceContainer = this.querySelector(".price__container");
        if (product.variants[0].compare_at_price) {
          priceContainer.innerHTML = `<span class="change-price-regular">$${product.variants[0].compare_at_price}</span><span>$${product.variants[0].price}</span>`;
        } else {
          priceContainer.innerHTML = `<span class="change-price-regular">$ ${product.variants[0].price}</span>`;
        }
      }

      onChangeVariant(product) {
        this.createFieldsetVariant(product);
        this.setDataVariant(product);
        this.updateOption();
        this.updateIdVariant(product);
        this.updateVariant();
      }

      createFieldsetVariant(product) {
        const listVariant = [];

        product.options.map((option) => {
          listVariant.unshift(
            `<fieldset class="js product-form__input"><div class="list-picker-variant"></div></fieldset>`
          );
        });
        const newListVariant = `${listVariant.join("")}`;
        this.radios.innerHTML = newListVariant;
      }

      setDataVariant(product) {
        const listField = this.radios.querySelectorAll("fieldset");
        const listVariantColor = [];
        const listItemVariant = [];
        product.options.map((option, index) => {
          if (option.name == "Color") {
            option.values.map((item) => {
              listVariantColor.push(`<input
              type="radio"
              id="${product.id}-${item}"
              name="${option.name}"
              value="${item}"
            >
            <label class="style-variant-popup" for="${product.id}-${item}">
              <img src="${product.image.src}">
            </label>`);
            });
          } else {
            option.values.map((item) => {
              listItemVariant.push(`<input
            type="radio"
            id="${product.id}-${item}"
            name="${option.name}"
            value="${item}"
            >
            <label class="style-variant-popup" for="${product.id}-${item}">
              ${item}
            </label>`);
            });
          }
          // listVariantColor[0].setAttribute('checked');
          const listColor = `${listVariantColor.join("")}`;
          listField[0].innerHTML = listColor;
          const listVariant = `${listItemVariant.join("")}`;
          listItemVariant.length = 0;
          listField[index].innerHTML = listVariant;
        });
      }

      updateVariant() {
        const selectedOptionOneVariants = this.variantData.filter(
          (variant) => this.querySelector(":checked").value === variant.option1
        );

        const inputWrappers = [
          ...this.querySelectorAll(".product-form__input"),
        ];
        inputWrappers.forEach((option, index) => {
          if (index === 0) return;
          const optionInputs = [
            ...option.querySelectorAll('input[type="radio"], option'),
          ];

          const previousOptionSelected =
            inputWrappers[index - 1].querySelector(":checked").value;
          const availableOptionInputsValue = selectedOptionOneVariants
            .filter(
              (variant) =>
                variant.available &&
                variant[`option${index}`] === previousOptionSelected
            )
            .map((variantOption) => variantOption[`option${index + 1}`]);
          this.setInputAvailability(optionInputs, availableOptionInputsValue);
        });
      }

      setInputAvailability(listOfOptions, listOfAvailableOptions) {
        listOfOptions.forEach((input) => {
          if (listOfAvailableOptions.includes(input.getAttribute("value"))) {
            input.classList.remove("disabled");
          } else {
            input.classList.add("disabled");
          }
        });
      }

      updateOption() {
        const fieldsets = Array.from(this.querySelectorAll("fieldset"));
        this.options = fieldsets.map((fieldset) => {
          const arrVariant = Array.from(fieldset.querySelectorAll("input"));
          // console.log(arrVariant.find((radio) => radio.checked).value);
          // console.log(arrVariant)
          // arrVariant.map(item=>console.log(item));
          // return arrVariant.find(checkEd(arrVariant)).value;
        });
      }

      // // checkEd(listVariant){
      // //   listVariant.map(item => console.log*item);
      // // }

      updateIdVariant(product) {
        this.currentVariant = this.getVariantData(product).find((variant) => {
          // console.log(variant.options);
          // return !variant.options.map((option, index) => {
          //   return this.options[index] === option;
          // }).includes(false);
        });
      }

      getVariantData(product) {
        this.radios.setAttribute("data-url", `/products/${product.handle}`);
        this.variantData = product.variants;
        return this.variantData;
      }

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
