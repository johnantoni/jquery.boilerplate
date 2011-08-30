/* Author:

*/


$(function() {

	// your code

	// try out the callback example
	$("p:first-child").sb_basic([], fadeAble("p:first-child"))

	
	// try out the chained example
	$("p:nth-child(2n)").sb_chain()
		.fadeOut()
		.fadeIn()


});
