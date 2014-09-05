(function( $ ){

  $.fn.bgAlpha = function(images, params) {
  
  if(params==undefined) params={};
	var def={
				
				animTime: 1,
				showTime: 4,
				
			};
			var elem=this;
			
			console.log('bgAlpha init');
			var currentImage=0;
			elem.css("background", "url('"+images[0]+"')");
			var lastImage=images.length-1;
			var toggleBackground=function(){
			
			if(currentImage==lastImage) {
			
			currentImage=0;
			
			} else {
			
			currentImage++;
			
			}
			
			elem.css("background", "url('"+images[currentImage]+"')");
			
			}
			var animTime=params.animTime==undefined ? def.animTime : params.animTime;
			var showTime=params.showTime==undefined ? def.showTime : params.showTime;
			elem.css('-webkit-transition','background '+animTime+'s ease-out');
			elem.css('-moz-transition','background '+animTime+'s ease-out');
			elem.css('-o-transition','background '+animTime+'s ease-out');
			elem.css('-ms-transition','background '+animTime+'s ease-out');
			elem.css('transition','background '+animTime+'s ease-out');
			window.setInterval(toggleBackground,(showTime+animTime)*1000);
	

  };
})( jQuery );