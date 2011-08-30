// jquery.sb_basic
//
// a basic boilerplate for writing jQuery plugins
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

  $.fn.sb_basic = function(params, callback) {
    var el = $(this); // get element

    // set default params, merging with ones given
    var params = $.extend({ color: "green" }, params);  

    el.attr("style", "color:"+params.color);
    
    // allow the plugin to support callbacks
    if (typeof callback == 'function') {
        callback.call(this);
    }
    
  };

})( jQuery );
