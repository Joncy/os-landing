jQuery(document).ready(function() {
	jQuery('.dynpost-even').addClass("anHidden").viewportChecker({
		classToAdd: 'anVisible animated bounceInLeft', 
		offset: 100, 
		repeat: true, 
		callbackFunction: function(elem, action){},
		scrollHorizontal: false 
	});

	jQuery('.dynpost-odd').addClass("anHidden").viewportChecker({
		classToAdd: 'anVisible animated bounceInRight', 
		offset: 100, 
		repeat: true, 
		callbackFunction: function(elem, action){},
		scrollHorizontal: false 
	});
});