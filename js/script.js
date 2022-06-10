var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: ".swiper-button-prev"
  },

  autoplay: {
    delay:2500,
    stopOnLastSlide: true,
    disableOnInteraction: false
  },

  loop: true,

  slidesPerView: 1,



});