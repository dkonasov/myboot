(function( $ ){

  $.fn.mbSlider = function(params) {
  if(params==undefined) params={};
	var def={
				width: 100,
				animTime: 1,
				showTime: 2,
				animate: true,
				loop: true,
				arrows: true,
			};
	var slideForward=function(){
	
	if(left>0-($('.mbSlider-elem').size()*w-w)){
	
	left=left-w-11;
	
	} else {
	
	if(loop){
	
	left=0;
	
	}
	
	}
	$('.mbSlider-list').css('left', left+'px');
	console.log('slide');
	
	}
	
	var slideBackward=function(){
	
	if(left<0){
	
	left=left+w+11;
	
	} 
	$('.mbSlider-list').css('left', left+'px');

	
	}
			
	this.addClass('mbSlider-wrap');
	if(this.find('ul').size()<1){
	
	console.log('mbSlider:No lists found!');
	return;
	
	} else {
	this.find('ul').addClass('mbSlider-list');
	this.find('.mbSlider-list>li').addClass('mbSlider-elem');
	if(params.height!=undefined){
	
	$('.mbSlider-wrap').css('height', params.height+'px');
	
	} else {
	
	$('.mbSlider-wrap').css('height', $('.mbSlider-list').height()+'px');
	
	}
	if(params.width!=undefined){
    $('.mbSlider-elem').css('width', params.width+'px');
	$('.mbSlider-list').css('width', $('.mbSlider-elem').size()*params.width+11+'px');
	 $('.mbSlider-wrap').css('width', params.width+'px');
	 var w=params.width;
	} else {
	
	$('.mbSlider-elem').css('width', def.width+'px');
	$('.mbSlider-list').css('width', $('.mbSlider-elem').size()*def.width+11+'px');
	$('.mbSlider-wrap').css('width', def.width+'px');
	var w=def.width;
	}
	
	$('.mbSlider-list').css('left', '0px');
	var left=0;
	var animate=params.animate!=undefined ? params.animate : def.animate;
	var animTime=params.animTime!=undefined ? params.animTime : def.animTime;
	var showTime=params.showTime!=undefined ? params.showTime : def.showTime;
	var loop=params.loop!=undefined ? params.loop : def.loop;
	var arrows=params.arrows!=undefined ? params.arrows : def.arrows;
	if(arrows){
	
		$('.mbSlider-wrap').append('<div class="mbs-arrow-wrap mbs-arrow-wrap-left"><span class="mb-slider-arrows mb-slider-arrow-left"></span></div><div class="mbs-arrow-wrap mbs-arrow-wrap-right"><span class="mb-slider-arrows mb-slider-arrow-right"></span></div>');
		$('.mbs-arrow-wrap').css('line-height', parseInt($('.mbSlider-wrap').css('height'))+parseInt($('.mb-slider-arrows').css('height'))/2+'px');
		$('.mb-slider-arrow-right').click(slideForward);
		$('.mb-slider-arrow-left').click(slideBackward);
	}
	$('.mbSlider-list').css('-webkit-transition','left '+animTime+'s ease-out 0.5s');
	$('.mbSlider-list').css('-moz-transition','left '+animTime+'s ease-out 0.5s');
	$('.mbSlider-list').css('-o-transition','left '+animTime+'s ease-out 0.5s');
	$('.mbSlider-list').css('-ms-transition','left '+animTime+'s ease-out 0.5s');
	$('.mbSlider-list').css('transition','left '+animTime+'s ease-out 0.5s');
	if(animate){
	
	window.setInterval(slideForward, (animTime+showTime)*1000);
	
	}
	
	}

  };
})( jQuery );