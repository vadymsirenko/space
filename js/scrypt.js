$(document).ready(function () {
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="img/arrow_left.svg" alt="arrow left">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="img/arrow_right.svg" alt="arrow right">'
    });

    $('.menu-btn').on('click', function () {
        $('.menu__list, .menu-btn').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $(".menu__list, .footer__menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1300);
    });


    $('.up-to-top').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 3500);
        $('.up-to-top').removeClass('active');
        $('.up-to-top').addClass('go-to-up');
    });

    $(window).scroll(function () {
        let scrolled = $(window).scrollTop();

        if (scrolled > 350) { 
            $('.up-to-top').addClass('active');
            $('body').removeClass('lock');
            $('.menu__list, .menu-btn').removeClass('active');
        } else {
            $('.up-to-top').removeClass('active');
            $('.up-to-top').removeClass('go-to-up');
        }
    });

});
