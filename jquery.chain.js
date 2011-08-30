// http://www.engineyard.com/blog/2011/reuse-your-javascript-as-jquery-plugins/
// $("form input:text").redAlert('Stink').addClass('scanned');

(function($){
  $.fn.redAlert = function(badValue) {
    return this.each(function() {
      if ($(this).val().toLowerCase().indexOf(badValue.toLowerCase()) >= 0)
         $(this).addClass('error').css('background-color', 'red');
    });
  };
})(jQuery);
