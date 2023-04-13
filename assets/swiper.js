var swiper = new Swiper(".swiper-list", {
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    990: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function equalHeight() {
  let talet = 0;
  const listEqual = document.querySelector(".list-equal");
  let handle = listEqual.querySelectorAll(".card__content");
  setHeight(handle, talet);
  window.addEventListener("resize", function () {
    setHeight(handle, talet);
  });
}
equalHeight();

function setHeight(handle, talet) {
  handle.forEach((item) => {
    contentBlock(item, talet);

  });
}

function contentBlock(item, talet) {
  let eleHeight = item.offsetHeight;
  talet = eleHeight > talet ? eleHeight : talet;
  item.style.height = talet + "px";
}
