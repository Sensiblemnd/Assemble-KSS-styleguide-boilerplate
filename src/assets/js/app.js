// jshint unused:false
// jshint undef:false

'use strict';
var config = {
	breakpoint: '',
	debug:true//set to false if you dont want the logs to show
	

};

var  log= {
	debug: function(content){
		if ((window.console && window.console.log) && config.debug){
			console.log(content);
		}
	}
};
//https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript

var breakpoint = {};
breakpoint.refreshValue = function () {
	config.breakpoint = window.getComputedStyle(document.querySelector('body'), ':after').getPropertyValue('content').replace(/\"/g, '');
};

$(window).resize(function () {
	breakpoint.refreshValue();
	log.debug(config.breakpoint);
}).resize();

