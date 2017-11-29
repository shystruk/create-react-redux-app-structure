/**
 * @doc
 * Listen when the DOM is fully loaded and have window event listeners in one place.
 */

(function ($) {
'use strict';

    $(document).ready(function() {
        var toTopBtn = $('#toTop');


        // Window Visibilitychange Listener
        initPageVisibilityAPI();

        // Window Scroll Listener
        $(window).scroll(function() {
            showHideToTopBtn();
        });

        // Window Resize Listener
        $(window).resize(function() {
            app.resizeEvent.publish();
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
        
        function initPageVisibilityAPI() {
            var hidden, visibilityChange;

            // Opera 12.10 and Firefox 18 and later support
            if (typeof document.hidden !== 'undefined') {
                hidden = 'hidden';
                visibilityChange = 'visibilitychange';
            } else if (typeof document.msHidden !== 'undefined') {
                hidden = 'msHidden';
                visibilityChange = 'msvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                hidden = 'webkitHidden';
                visibilityChange = 'webkitvisibilitychange';
            }

            // Warn if the browser doesn't support addEventListener or the Page Visibility API
            if (typeof document.addEventListener === 'undefined' || typeof document.hidden === 'undefined') {
                alert('This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.');
            } else {
                document.addEventListener(visibilityChange, _handleVisibilityChange, false);
            }

            function _handleVisibilityChange(event) {
                if (document[hidden]) {
                    app.visibilityChangeEvent.publish(event);
                } else {
                    // page is visible you may continue doing what was stopped
                    app.visibilityChangeEvent.publish(event, 'continue');
                }
            }
        }
    });
}(jQuery));
