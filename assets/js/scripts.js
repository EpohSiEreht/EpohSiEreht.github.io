$(function() {
	projectHover();
	$(document).on('click','#learn-more', function(event) {
	    event.preventDefault();
	    console.log('hi');
	    $('html, body').animate({
	        scrollTop: $('#main').offset().top
	    }, 1200);
	    console.log('bye');
	});
});

function projectHover() {
	$('.project-tile, h4').hover(function(){
		var thisHover = $(this).find('.hover-tile');
		var thisH = $(this).find('h4');
		$(thisHover).show();
		$(thisHover).velocity({
			height: '100%'
		}, 700);
		$(thisH).velocity({
			opacity: "1"
		}, 1000);
		},
		function(){
			var thisHover = $(this).find('.hover-tile');
			var thisH = $(this).find('h4');
			$(thisHover).velocity({
				height: '0'
			}, 700);
			$(thisH).velocity({
				opacity: "0"
			}, 500);
			setTimeout(function(){
				$(thisHover).hide();
			},700);
		}
	);
}