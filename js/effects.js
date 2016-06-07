//popup
$(document).ready(function(){
	$('.video').on('click', function(){
		$('.popup-bg').css({'display':'flex'});
		$('body').css({'overflow-y':'hidden'});
	});
	$('.add-g').on('click', function(){
		$('.popup-bg').css({'display':'flex'});
		$('body').css({'overflow-y':'hidden'});
	});
	$('.close').on('click', function(){
		$('.popup-bg').css({'display':'none'});
		$('body').css({'overflow-y':'auto'});
	});
});

//map slider
$(document).ready(function(){
	$('.bar-ol li:first-child').addClass('ol-active');
	var n = 1;
	$('div[class*="map-slider-bar"] img').each(function(){
		var img = $(this).attr('src');
		$('.bar-ol li:nth-child('+n+')').attr('alt', img);
		n++;
	});
	$('.bar-ol li').on('click', function(){
		var img = $(this).attr('alt');
		var index = $(this).index() + 1;
		$('.bar-ol li').removeClass('ol-active');
		$('.bar-ol li:nth-child('+index+')').addClass('ol-active');
		$('.map-slider').css({
			'background-image':'url('+img+')'
		});
	});
	$('div[class*="map-slider-bar"] img').on('click', function(){
		var img = $(this).attr('src');
		var index = $(this).index() + 1;
		$('.bar-ol li').removeClass('ol-active');
		$('.bar-ol li:nth-child('+index+')').addClass('ol-active');
		$('.map-slider').css({
			'background-image':'url('+img+')'
		});		
	});
});

//scrolling
(function($){
    $(window).load(function(){
		$(".content").mCustomScrollbar({
		    theme:"dark-3",
		    axis:"x"
		});
		$(".content-xy").mCustomScrollbar({
		    theme:"dark-3",
		    axis:"xy"
		});
		$(".content-y").mCustomScrollbar({
		    theme:"dark-3",
		    axis:"y"
		});
    });
})(jQuery);