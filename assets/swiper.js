var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        376: {
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