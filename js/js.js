$(document).ready(function()
{
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        height: 430
    });
    // setInterval(function() {
 
    //     $('.carousel.carousel-slider').carousel('next');
     
    // }, 8000);
    $('.scrollspy').scrollSpy();
    // zoom foto
    $('.materialboxed').materialbox();
    //mostrar munu mobile
    $('.button-collapse').sideNav();
    // parallax
    $('.parallax').parallax();
    // tooltipped
    $('.tooltipped').tooltip();
    // btn up
    $('.fixed-action-btn').floatingActionButton();
})
