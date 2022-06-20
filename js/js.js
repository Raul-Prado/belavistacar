$(document).ready(function()
{
    // $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
    });
    $('.scrollspy').scrollSpy();
    // zoom foto
    $('.materialboxed').materialbox();
    //mostrar munu mobile
    $('.button-collapse').sideNav();
    // slider
    // $('.slider').slider({
    //     fullWidth: true,
    //     indicators: true,
    // });
    // parallax
    $('.parallax').parallax();
    // tooltipped
    $('.tooltipped').tooltip();
    // btn up
    $('.fixed-action-btn').floatingActionButton();
})
