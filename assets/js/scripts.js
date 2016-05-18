$(function() {
	$('.navbar, #menu-drop').localScroll({duration:800});
	toggleHamburger();
	navLinkTransition();
	projectHover();
});

function navLinkTransition() {
	$('#nav-about').on('click', function(){
		$('#nav-icon').trigger('click');
	});
	$('#nav-projects').on('click', function(){
		$('#nav-icon').trigger('click');
	});
	$('#nav-contact').on('click', function(){
		$('#nav-icon').trigger('click');
	});
}

function projectHover() {
	$('.project-tile').hover(function(){
		var thisHover = $(this).find('.hover-tile');
		var thisH = $(this).find('h3');
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
			var thisH = $(this).find('h3');
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

function toggleHamburger() {
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        var dropHeight = $('#menu-drop').get(0).scrollHeight + "px";
        if($('#menu-drop').css('height') === "0px"){
        	$('#menu-drop').show().animate({
        		height: $('#menu-drop').get(0).scrollHeight
        	}, 500);
        } else if($('#menu-drop').css('height') === dropHeight){
        	$('#menu-drop').animate({
        		height: '0px'
        	}, 500);
    		setTimeout(function(){
    			$('#menu-drop').hide();
    		}, 500);
        }
    });

}