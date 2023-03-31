var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        990: {
            slidesPerView: 4,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
  });