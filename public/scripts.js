// Behaviors

function arrowHover(){
  $('img#arrow').animate({
    top: "90%"
  }, 1000);
  $('img#arrow').animate({
    top: "88%"
  }, 1000, function(){
  arrowHover();
  });
}

function arrowScroll(){
  $('body').on('click', 'img#arrow', function(){
    console.log('clicked');
    $.scrollify.next();
  })
}

function scrollify(){
  $.scrollify({
    section : ".section-class-name",
  });
}

// $(function(){
//     arrowHover();
//     arrowScroll();
//     scrollify();
// });

// $('h2.logo').css('position', 'absolute');

// function moveLogo(){
//   $('h2.logo').animate({
//     top: "20px",
//     left: "95px"
//   }, 500);
//   $('h2.logo').animate({
//     top: "80px",
//     left: "70px"
//   }, 500);
//   $('h2.logo').animate({
//     top: "20px",
//     left: "45px"
//   }, 500);
//   $('h2.logo').animate({
//     top: "80px",
//     left: "70px"
//   }, 500);
// }

// setInterval(moveLogo, 2000);

// function moveElement(){
//   // Move element one direction
//   $('element').animate({
//     css_property: "value",
//     css_property: "value"
//   }, duration);
//   // Move element back to original position
//   $('element').animate({
//     css_property: "value",
//     css_property: "value"
//   }, duration);
//   // Move element to another direction
//   $('element').animate({
//     css_property: "value",
//     css_property: "value"
//   }, duration);
//   // Move element back to original position
//   $('element').animate({
//     css_property: "value",
//     css_property: "value"
//   }, duration, function(){
//     // This function allows you to add a new task after all animations have taken place.
//   });

// }
