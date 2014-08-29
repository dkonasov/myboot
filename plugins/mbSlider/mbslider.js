(function( $ ){

  $.fn.mbSlider = function(params) {
  
  if(params==undefined) params={};
	var def={
				width: 100,
				animTime: 1,
				showTime: 4,
				animate: true,
				loop: true,
				arrows: true,
				progressbar: true,
				bullets: true,
			};
	var slideForward=function(){
	
	if(left>0-($('.mbSlider-elem').size()*w-w)){
	
	left=left-w;
	
	} else {
	
	if(loop){
	
	left=0;
	
	}
	
	}
	$('.mbs-progressbar').css('width', ((1/120)*100)/w*100+'%');
	$('.mbSlider-list').css('left', left+'px');
	$('.mbs-bullet').removeClass('activeBullet');
	$('#mbs-bullet-'+Math.abs(left/w)).addClass('activeBullet');
	}
	
	var slideBackward=function(){
	
	if(left<0){
	
	left=left+w;
	
	} 
	$('.mbs-progressbar').css('width', ((1/120)*100)/w*100+'%');
	$('.mbSlider-list').css('left', left+'px');
	$('.mbs-bullet').removeClass('activeBullet');
	$('#mbs-bullet-'+Math.abs(left/w)).addClass('activeBullet');

	
	}
	
	var slideTo=function(index) {
	
	left=0-index*w;
	$('.mbs-progressbar').css('width', ((1/120)*100)/w*100+'%');
	$('.mbSlider-list').css('left', left+'px');
	$('.mbs-bullet').removeClass('activeBullet');
	$('#mbs-bullet-'+Math.abs(left/w)).addClass('activeBullet');
	
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
	var bullets=params.bullets!=undefined ? params.bullets : def.bullets;
	if(bullets) {
	
	$('.mbSlider-wrap').append('<div class="mbs-bullets"></div>');
	$('.mbSlider-elem').each(function(key, value){
		
		$('.mbs-bullets').append('<div class="mbs-bullet" id="mbs-bullet-'+key+'" data-index="'+key+'"></div>');
		if(key==Math.abs(left/w)){
		
		$('#mbs-bullet-'+key).addClass('activeBullet');
		
		}
	});
	$('.mbs-bullet').click(function(){
	
	slideTo($(this).data('index'));
	
	});
	$('.mbs-bullets').append('<div class="cb"></div>');
	
	}
	if(arrows){
	
		$('.mbSlider-wrap').append('<div class="mbs-arrow-wrap mbs-arrow-wrap-left"><span class="mb-slider-arrows mb-slider-arrow-left"></span></div><div class="mbs-arrow-wrap mbs-arrow-wrap-right"><span class="mb-slider-arrows mb-slider-arrow-right"></span></div>');
		$('.mbs-arrow-wrap').css('line-height', parseInt($('.mbSlider-wrap').css('height'))+parseInt($('.mb-slider-arrows').css('height'))/2+'px');
		$('.mb-slider-arrow-right').click(slideForward);
		$('.mb-slider-arrow-left').click(slideBackward);
	}
	$('.mbSlider-list').css('-webkit-transition','left '+animTime+'s ease-out');
	$('.mbSlider-list').css('-moz-transition','left '+animTime+'s ease-out');
	$('.mbSlider-list').css('-o-transition','left '+animTime+'s ease-out');
	$('.mbSlider-list').css('-ms-transition','left '+animTime+'s ease-out');
	$('.mbSlider-list').css('transition','left '+animTime+'s ease-out');
	if(animate){
	var progressbar=params.progressbar!=undefined ? params.progressbar : def.progressbar;
	if(progressbar){
	$('.mbSlider-wrap').append('<div class="mbs-progressbar"></div>');
	$('.mbs-progressbar').css('width', ((1/120)*100)/w*100+'%');
	window.setInterval(function(){
	var percentWidth=parseInt($('.mbs-progressbar').css('width'))/w*100;
	percentWidth=percentWidth+(1/120)*100;
	
	$('.mbs-progressbar').css('width', percentWidth+'%');
	}, ((animTime+showTime)*1000)/120);
	}

	window.setInterval(slideForward, (animTime+showTime)*1000);
	
	}
	
	}

  };
})( jQuery );