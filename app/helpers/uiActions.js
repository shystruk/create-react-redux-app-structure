import jQuery from 'jquery';

/**
 * @param {String} element 
 * @param {Number=} additionalSpace 
 * @param {Object=} event
 */
export const scrollTo = (element, additionalSpace = 0, event) => {
    event && event.preventDefault();
    event && event.stopPropagation();

    jQuery('html, body').animate({
        scrollTop: jQuery(element).offset().top + additionalSpace
    }, 1000);
};
