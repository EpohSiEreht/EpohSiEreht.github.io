$(function() {
	toggleHamburger();
	navLinkTransition();
	contentTransition();
	projectHover();
});

var firstContentRight = $('#first-content').css('right');
var secondContentRight = $('#second-content').css('right');
var thirdContentRight = $('#third-content').css('right');

function contentTransition() {
	$('body').on('click', '#to-projects', function() {
		rightProjects();
	});
	$('body').on('click', '#to-about', function() {
		leftAbout();
	});
	$('body').on('click', '#to-contact', function() {
		rightContact();
	});
	$('body').on('click', '#back-projects', function() {
		leftProjects();
	});
}

function rightProjects(){
	$('#first-content').velocity({
		right: '100vw'
	}, 500, function(){
		setTimeout(function(){
			$('#first-content').hide();
		})
	});
	$('#second-content').css('right', '-100vw').show().velocity({
		right: '0'
	}, 500);
}

function rightContact(){
	$('#second-content').velocity({
		right: '100vw'
	}, 500, function(){
		setTimeout(function(){
			$('#second-content').hide();
		}, 500);
	});
	$('#third-content').css('right', '-100vw').show().velocity({
		right: '0'
	}, 500);
}

function leftAbout(){
	$('#second-content').velocity({
		right: '-100vw'
	}, 500, function(){
		setTimeout(function(){
			$('#second-content').hide();
		}, 500);
	});
	$('#first-content').show().velocity({
		right: '0'
	}, 500);
}

function leftProjects(){
	$('#second-content').show().velocity({
		right: '0vw'
	}, 500);
	$('#third-content').velocity({
		right: '-100vw'
	}, 500, function(){
		$('#third-content').hide();;
	});
}

function navLinkTransition() {
	$('#nav-about').on('click', function(e){
		e.preventDefault();
		$('#nav-icon').trigger('click');
		if((firstContentRight === "0px" && secondContentRight !== "0px") || (firstContentRight !== "0px" && secondContentRight === "0px")){
			leftAbout();
		} else if(firstContentRight !== "0px"){
			leftProjects();
			setTimeout(function(){
				leftAbout();
			}, 500);
		}
	});
	$('#nav-projects').on('click', function(e){
		e.preventDefault();
		$('#nav-icon').trigger('click');
		if((firstContentRight === "auto" && secondContentRight === "auto") || (firstContentRight !== "0px" && secondContentRight !== "0px")){
			rightProjects();
		} else if(firstContentRight > "0px" && thirdContentRight !== "0px"){
			leftProjects();
		}
	});
	$('#nav-contact').on('click', function(e){
		e.preventDefault();
		$('#nav-icon').trigger('click');
		if((firstContentRight == "0px" && secondContentRight !== "0px" & thirdContentRight !== "0px") || firstContentRight !== "0px" && secondContentRight !== "0px" && thirdContentRight === "0px"){
			rightContact();
		} else if((firstContentRight !== "0px" && secondContentRight !== "0px" && thirdContentRight !== "0px") || (firstContentRight !== "0px" && thirdContentRight !== "0px" && secondContentRight === "0px")){
			rightProjects();
			setTimeout(function(){
				rightContact();
			}, 500);
		}
	});
}

function projectHover() {
	$('.project-tile').hover(function(){
		var thisHover = $(this).find('.hover-tile');
		var thisH = $(this).find('h3');
		$(thisHover).show();
		$(thisHover).velocity({
			height: '100%'
		}, 700)},
		function(){
			var thisHover = $(this).find('.hover-tile');
			var thisH = $(this).find('h3');
			$(thisHover).velocity({
				height: '0'
			}, 700);
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