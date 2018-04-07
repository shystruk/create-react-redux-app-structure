/**
 * @doc
 * Listen when the DOM is fully loaded and have window event listeners in one place.
 */

import PublishSubscribe from 'publish-subscribe-js';
import jQuery from 'jquery';
import { PUB_SUB } from './../constants/events.constant';

export default function DOMReady() {
    jQuery(document).ready(function() {
        const toTopBtn = jQuery('#toTop');


        // Window Visibilitychange Listener
        initPageVisibilityAPI();

        // Window Scroll Listener
        jQuery(window).scroll(function() {
            showHideToTopBtn();
        });

        // Window Resize Listener
        jQuery(window).resize(function() {
            PublishSubscribe.publish(PUB_SUB.RESIZE, {width: window.innerWidth, height: window.innerHeight});
        });


        toTopBtn.click(function () {
            jQuery('html, body').animate({scrollTop:0}, 'slow');
        });

        function showHideToTopBtn() {
            if (jQuery(window).scrollTop() < 200) {
                toTopBtn.fadeOut();
            } else if (jQuery(window).scrollTop() > 200) {
                toTopBtn.fadeIn();
            }
        }

        function initPageVisibilityAPI() {
            let hidden, visibilityChange;

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
                    PublishSubscribe.publish(PUB_SUB.PAGE_VISIBILITY, {event});
                } else {
                    // page is visible you may continue doing what was stopped
                    PublishSubscribe.publish(PUB_SUB.PAGE_VISIBILITY, {event, action: 'continue'});
                }
            }
        }
    });
}
