$(document).ready(function()
{
    $('.carousel').carousel();
    $('.scrollspy').scrollSpy();
    // zoom foto
    $('.materialboxed').materialbox();
    //mostrar munu mobile
    $('.button-collapse').sideNav();
    // slider
    $('.slider').slider({
        fullWidth: true,
        indicators: false,
    });
    // parallax
    $('.parallax').parallax();
    // tabs
    $('ul.tabs').tabs();
    // tooltipped
    $('.tooltipped').tooltip();
    // btn up
    $('.fixed-action-btn').floatingActionButton();
})