;(function($, window, undefined){
	if(this.length == 0){
		return this;//return chainable imediately (if no selection)
	}
	$.fn.myPlugin = function(options){
		var settings = $.extend({
			'foo':123,
			'bar':456
		}, options);
		
		//plugin code, returns 'this' (the jQuery selector to maintain chainability)
		return this.each(function(){        
			//add your stuff here	
		});
	};
}(jQuery, window));
