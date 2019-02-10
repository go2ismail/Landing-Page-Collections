// -----------------------------

//   js index
/* =================== */
/*  
    preloader
    sticky
    sticky-mobile
    scroll-up
    counter
    smooth scroll
    countdown
    slider
    waypoint js active
    mix-it-up
    Testimonial Area show 
    scroll Reval
    blog-carousel
    creative-carousel
    companies-carousel
    progress-bar
    accordian
    masonry

*/
// -----------------------------


(function($) {
    "use strict";


    /*---------------------
    smooth scroll
    --------------------- */
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 800);
    });

    

}(jQuery));