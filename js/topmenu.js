var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
        header.removeClass('out');
        header.addClass('visible');

    } else {

        header.addClass('out');
    }
    scrollPrev = scrolled;
});



function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === "topnav") {
        x.className += " responsive"
    } else {
        x.className = "topnav";
    }
}
