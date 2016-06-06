$(function() {
	projectHover();
	$(document).on('click','#view-portfolio', function(event) {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $('#main').offset().top
	    }, 1200);
	});
	$(document).on('click','.arrow', function(event) {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $('#main').offset().top
	    }, 1200);
	});
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-78067364-1', 'auto');
  ga('send', 'pageview');

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
