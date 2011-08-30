// jquery.sb_chain
//
// a boilerplate for writing chainable jQuery plugins
//
// requires:
//  [fill me in]
//
// params: 
//  [fill me in]
//
// author: Joe Bloggs
// version: 0.1

(function( $ ){

  $.fn.sb_chain = function(params) {
		return this.each(function() {
		  var params = $.extend({ color: "red" }, params);

      $(this).attr("style", "color:"+params.color);
    });	
	    
  };

})( jQuery );
