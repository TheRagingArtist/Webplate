/**
 * File: project/js/src/welcome.js
 * Type: Javascipt file
 * Author: Chris Humboldt
 */

// Functions
var gettingStartedDisplay = function() {
	web.eventAdd(web.select('#link-getting-started'), 'click', function(event) {
		event.preventDefault();
		web.classAdd(web.element.html, '_getting-started-active');
		Velocity(web.select('#getting-started'), {
			top: 0
		}, {
			delay: 400,
			duration: 800,
			easing: 'easeOutCubic'
		});
	});
	web.eventAdd(web.select('#link-getting-started-close'), 'click', function(event) {
		event.preventDefault();
		Velocity(web.select('#getting-started'), {
			top: '100vh'
		}, {
			duration: 800,
			easing: 'easeOutCubic',
			complete: function() {
				web.classRemove(web.element.html, '_getting-started-active');
			}
		});
	});
};

// Execute
gettingStartedDisplay();
web.scrollTo({
	offset: -68,
	offsetLarge: -88
});
setTimeout(function() {
	web.classAdd(web.element.html, '_active');
}, 750);