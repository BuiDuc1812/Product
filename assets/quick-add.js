if (!customElements.get("quick-add-modal")) {
  customElements.define(
    "quick-add-modal",
    class QuickAddModal extends ModalDialog {
      constructor() {
        super();
        this.modalContent = this.querySelector('[id^="QuickAddInfo-"]');
        // this.onChangeV()
      }

      hide() {
        super.hide();
      }

      show(opener) {
        fetch(`${opener.getAttribute("data-product-url")}?view=ajax`)
          .then((res) => res.json())
          .then((res) => {
            this.ajaxData = res;
          });

        fetch(`${opener.getAttribute("data-product-url")}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            this.radios = this.querySelector(".change-variant");
            this.productItem = response.product;
            this.changeDataPopup(this.productItem);
            this.priceProduct(this.productItem);
            this.createFieldsetVariant(this.productItem);
            this.setDataVariant(this.productItem);
            this.addChecked();
            super.show(opener);
            this.radios.addEventListener("change", (event) => {
              this.updateOption();
              this.updateIdVariant();
              this.updateVariant(this.ajaxData);
            });
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
        if (product.variants[0].compare_at_price > product.variants[0].price) {
          priceContainer.innerHTML = `<span class="change-price-regular">$${product.variants[0].compare_at_price}</span><span>$${product.variants[0].price}</span>`;
        } else {
          priceContainer.innerHTML = `<span class="change-price-regular">$${product.variants[0].price}</span>`;
        }
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
        this.listField = this.radios.querySelectorAll("fieldset");
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
          const listColor = `${listVariantColor.join("")}`;
          this.listField[0].innerHTML = listColor;
          const listVariant = `${listItemVariant.join("")}`;
          listItemVariant.length = 0;
          this.listField[index].innerHTML = listVariant;
        });
      }

      addChecked() {
        this.listField.forEach((fieldset) => {
          fieldset.querySelectorAll("input")[0].setAttribute("checked", true);
        });
      }

      updateOption() {
        const fieldsets = Array.from(this.querySelectorAll('fieldset'));
        this.options = fieldsets.map((fieldset) => {
          return Array.from(fieldset.querySelectorAll('input')).find((radio) => radio.checked).value;
        });
      }

      updateVariant(product) {
        const selectedOptionOneVariants = product.variants.filter(
          (variant) => this.querySelector(":checked").value === variant.option1
        );

        const inputWrappers = [
          ...this.querySelectorAll(".product-form__input"),
        ];

        inputWrappers.forEach((option, index) => {
          if (index === 0) return;
          const optionInputs = [
            ...option.querySelectorAll('input[type="radio"]'),
          ];

          const previousOptionSelected =
            inputWrappers[index - 1].querySelector(":checked").value;

          const variantAvailable = selectedOptionOneVariants.filter(
            (variant) => {
              if (
                variant.available &&
                variant[`option${index}`] === previousOptionSelected
              ) {
                return variant;
              }
            }
          );
          const availableOptionInput = variantAvailable.map((variantOption) => {
            return variantOption[`option${index + 1}`];
          });
          this.setInputAvailability(optionInputs, availableOptionInput);
        });
      }

      setInputAvailability(listOptions, listAvailableOptions) {
        listOptions.forEach((input) => {
          if (listAvailableOptions.includes(input.getAttribute("value"))) {
            input.classList.remove("disabled");
          } else {
            input.classList.add("disabled");
          }
        });
      }

      updateIdVariant() {
        this.currentVariant = this.getVariantData().find((variant) => {
          return !variant.options.map((option, index) => {
            return this.options[index] === option;
          }).includes(false);
        });
        console.log(this.currentVariant)
      }

      getVariantData() {
        this.radios.setAttribute(
          "data-url",
          `/products/${this.ajaxData.handle}`
        );
        this.variantData = this.ajaxData.variants;
        return this.variantData;
      }
    }
  );
}
