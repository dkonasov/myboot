(function( $ ){

  $.fn.mbSlider = function(params) {
	this.addClass('mbSlider-wrap');
	if(this.find('ul').size()<1){
	
	console.log('mbSlider:No lists found!');
	return;
	
	} else {
	
    console.log(this.size());
	
	}

  };
})( jQuery );