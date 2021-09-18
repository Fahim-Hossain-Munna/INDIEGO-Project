
setTimeout(function(){
$("#prelodder").slideUp()

},3000)




// ================================
// navbar scroll start
// ===============================


$(window).scroll(function () {
       if ($(window).scrollTop() > 300) {
              $(".menu").addClass("fixedmenu")

       } else {
              $(".menu").removeClass("fixedmenu")
       }

});

// ================================
// navbar scroll end
// ===============================

// ================================
// banner part start
// ===============================
$('.banner-slider').slick({
       arrows: false,
       dots: true,
});


AOS.init();

// ================================
// banner part end
// ===============================

// ================================
// game part start
// ===============================
$('.game-slider').slick({
       prevArrow: '<i class="fas fa-angle-left prev"></i>',
       nextArrow: '<i class="fas fa-angle-right next"></i>',
       slidesToShow: 4,
       slidesToScroll: 1,
       responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
});

// ================================
// game part end
// ===============================

// ================================
// testi part start
// ===============================

$('.testi-slider').slick({
       prevArrow: '<i class="fas fa-angle-left prev"></i>',
       nextArrow: '<i class="fas fa-angle-right next"></i>',
       slidesToShow: 2,
       slidesToScroll: 1,
       dots: true,
       responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
});

// ================================
// testi part end
// ===============================

// ================================
// mixit-up part start
// ===============================
var mixer = mixitup(".s-mixxer");

// ================================
// mixit-up part end
// ===============================

// ================================
// venu-box part start
// ===============================

$('.venobox').venobox();

// ================================
// venu-box part end
// ===============================