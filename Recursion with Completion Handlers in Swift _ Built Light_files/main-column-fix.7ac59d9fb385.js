
// We want the width of the main column to be driven by the width of the nav, at widths > 666.
// A couple of elements (like Swiper and Activity Index no-wrap h2 elements) conspire against this, so we
// enforce it with this function. If we can resolve this in the future with pure CSS, this can be deleted.

function constrainMainColumnWidth() {
	
	// JS loaded successfully, so we remove this class, disabling its associated CSS rules.
    $('body').removeClass('no-js-fallback');

	var windowWidth = $(window).width();
	var isCompactScreen = windowWidth <= 666;	
	var navWidth = $('#site-nav').width();
	var mainWidth = isCompactScreen ? windowWidth - 30 : navWidth;

	// Only Activity Index and Work/Activity posts using Swiper need help.
	if (($('.swiper-container').length) || ($('body.activity-index').length)) {
		$('main').css('width', mainWidth);
	}
	
	// Portfolio and Work Index are special cases, 
	// since the grid is allowed to grow up to 5 columns wide.
	if ($('#portfolio-intro').length) {
		$('#portfolio-intro').css('width', mainWidth);
	}
	
	if ($('body.work h1.tagline').length) {
		$('body.work h1.tagline').css('width', mainWidth);
	}
}

$(document).ready(constrainMainColumnWidth);
$(window).load(constrainMainColumnWidth);
$(window).resize(constrainMainColumnWidth);
