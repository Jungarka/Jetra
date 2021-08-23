$(function(){
    $('.slider').slick({
        prevArrow:'<button class="slick-arrow slick-prev"><img src="image/prev.png" alt=""></button>',
        nextArrow:'<button class="slick-arrow slick-next"><img src="image/next.png" alt=""></button>',
        asNavFor: '.thumbs',
    });
    $('.thumbs').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 807,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 654,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 485,
              settings: {
                slidesToShow: 2, 
              }
            },
            {
              breakpoint: 338,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });

    $('.header__menu-btn').on('click', function(){
      $('.header__menu > ul').slideToggle();
    });
});
