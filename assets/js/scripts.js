$(function(){
	$('body').on('click', '#menu', function(){
		$('.mobile-nav').show();
		$('.mobile-nav').animate({
			transform: "translateY(100%)"
		}, 300);
	});
})