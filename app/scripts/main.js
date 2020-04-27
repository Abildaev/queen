$(document).ready(function () {

    $('.slider-1').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1,
            }
        }
    });

    $('.slider__portfolio').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,

            }
        }
    });

    $('.slider__partners').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2
            },
            768: {
                items: 4
            },
            960: {
                items: 6
            }
        }
    });


    function menuMove() {
        $('.header__menu').toggleClass('is-active')
    }

    $('.header__info').on('click', menuMove);

    $('a[href^="#"]').click(function () {
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top + 20
        }, 1000)
    });

    function scrollingUp() {
        const target = $('#banner');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000)
    };

    $('.scroll__up').on('click', scrollingUp);

    $(window).scroll(function () {
        const distanceTop = $('.services').offset().top - 50;
        if ($(window).scrollTop() > distanceTop) {
            $('.scroll__up').css({'right': '0.5%'});
        } else
            $('.scroll__up').stop(true).css({'right': '-100%'});
    });

    function removeClass() {
        $('.header__menu').removeClass('is-active')
    };

    $('.header__link').on('click', removeClass);

});

