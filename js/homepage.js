$(".partner-slide").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  mobileFirst:true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
  ]
});

$(".banner-slide").slick({
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
});
