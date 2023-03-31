var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 8
        },
        376: {
          slidesPerView: 2,
          spaceBetween: 8

        },
        750: {
            slidesPerView: 3,
            spaceBetween: 16
        },
        990: {
            slidesPerView: 4,
            spaceBetween: 16
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
  });