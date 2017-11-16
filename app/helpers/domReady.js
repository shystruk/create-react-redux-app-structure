/**
 * @doc
 * Listen when the DOM is fully loaded and have window event listeners in one place.
 */

(function ($) {
'use strict';

    $(document).ready(function() {
        var toTopBtn = $('#toTop');


        // Window Scroll Listener
        $(window).scroll(function() {
            showHideToTopBtn();
        });

        // Window Resize Listener
        $(window).resize(function() {
            window.app.resizeEvent.publish();
        });


        toTopBtn.click(function () {
            $('html, body').animate({scrollTop:0}, 'slow');
        });

        function showHideToTopBtn() {
            if ($(window).scrollTop() < 200) {
                toTopBtn.fadeOut();
            } else if ($(window).scrollTop() > 200) {
                toTopBtn.fadeIn();
            }
        }
    });

}(jQuery));
