$(document).ready(function()
{
    // $('.carousel').carousel();
    // $('.carousel.carousel-slider').carousel({
    //     fullWidth: true,
    //     indicators: true,
    //     transition: 700,
    //     interval: 8550,
    //     height: 430
    // });
    $('.scrollspy').scrollSpy();
    // zoom foto
    $('.materialboxed').materialbox();
    //mostrar munu mobile
    $('.button-collapse').sideNav();
    // slider
    $('.slider').slider({
        fullWidth: true,
        indicators: false,
        // transition: 700,
        // interval: 8550,
        height: 550
    });
    // parallax
    $('.parallax').parallax();
    // tooltipped
    $('.tooltipped').tooltip();
    // btn up
    $('.fixed-action-btn').floatingActionButton();
})