/* Author:

*/


$(function() {


	// your code


	// try out the callback example
	$("#main p:first-child").sb_basic([], fadeAble("#main p:first-child"));

	
	// try out the chained example
	$("#main p:nth-child(2n)").sb_chain()
		.fadeOut()
		.fadeIn();


	// try out the namespaced example
	$("#main p:last-child").sb_namespace()
		.sb_namespace('colorize');


});
