// jquery.sb_namespace
//
// a boilerplate for writing namespaced chainable jQuery plugins
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
	
	var methods = {
		
		// initialize
		init : function( options ) {
	
			return this.each(function(){
	 
				var $this = $(this),
					data = $this.data('sb_namespace');
						
				// if plugin hasn't been initialized yet
				if ( ! data ) {
	
					options = $.extend({ target : $this, color: "blue" }, options);
					$(this).data('sb_namespace', options);
					
				}
			});
		},
		
		// destroy method
		destroy : function( ) {
			return this.each(function(){
				
				var $this = $(this),
					data = $this.data('sb_namespace');
					
				// remove data
				$this.removeData('sb_namespace');
				
			});
		},

		// change element color
		colorize : function( ) { 
			
			return this.each(function(){
				
				var $this = $(this),
					data = $this.data('sb_namespace');
					
				// do the work
				$this.attr("style", "color:"+data.color);
				
			});
		}

	};

	// namespaced
	$.fn.sb_namespace = function( method ) {
		
		if ( methods[method] ) {
			// fire specific method
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			// fire init method
			return methods.init.apply( this, arguments );
		} else {
			// no method available? tell author
			$.error( 'Method ' +  method + ' does not exist on jQuery.sb_namespace' );
		}
		
	};
	
})( jQuery );
