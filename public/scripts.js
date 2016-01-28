// Behaviors

function sunHover(){
  $('img#sun').animate({
    top: "+5px"
  }, 1000);
  $('img#sun').animate({
    top: "-5px"
  }, 1000, function(){
  sunHover();
  });
}

$(function(){
    sunHover();
});


