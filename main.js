$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })



    $('.owl-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });
    $('.move-up span').click(function () {
        $('html,body').animate({
            scrollTop: 0

        }, 1000);
    })

});