$(function () {
  $(".header__slider").slick({
    dots: true,
    speed: 800,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
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
