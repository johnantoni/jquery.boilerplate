// jquery.boilerplate
//
// a simple boilerplate for writing jQuery plugins
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

  $.fn.boilerplate = function(params, callback) {
    var el = this; // get element

    // set default params, merging with ones given
    var params = $.extend({ default: null }, params);  

    // ...
    // ...
    // ...
    
    // allow the plugin to support callbacks
    if (typeof callback == 'function') {
        callback.call(this);
    }
    
  };

})( jQuery );
