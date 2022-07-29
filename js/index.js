$(function () {
  $(".header__slider").slick({
    dots: true,
    arrows: false,
  });
  $(".works__slider").slick({
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1607,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1067,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".clients__box").slick({
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 367,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  $(".authors__quote").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".authors__images",
    initialSlide: 3,
  });
  $(".authors__images").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="authors__prevArrow">&#8249;</div>',
    nextArrow: '<div class="authors__nextArrow">&#8250;</div>',
    asNavFor: ".authors__quote",
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "40px",
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  document.querySelector(".our__works-drible");

  document.querySelectorAll("ul.slick-dots li button").forEach((e) => {
    e.innerText = "";
  });
});

window.onload = () => {
  document.getElementById("hideAll").style.display = "none";
};
let headerNav = document.querySelector(".header__navbar"),
  burgMenu = document.querySelector("#menu");

burgMenu.addEventListener("click", () => {
  headerNav.classList.toggle(`hidden`);
  headerNav.classList.toggle(`show`);
});
