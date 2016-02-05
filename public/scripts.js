// Behaviors

// function expandAbout(){
//   $('body').on('click', 'img#about', function(){
//     $('.icon').css('opacity', '0');
//     $('.expand-icon').css('opacity', '0');
//     $('img#about').css('opacity', '1');
//     $('#pink-circle').css('opacity', '1');
//     $('.expand-icon').animate({
//       width: "100%",
//       height: "100%",
//       left: "-50%",
//       top: "-50%",
//     }, 1000, function(){
//       $('.expand-icon').css({'width': '100%','height': '100%','left': '0','top': '0', 'border-radius': '0'});
//     });
//   });
// };

function closeX(){
  $('body').on('click', '.x-icon', function(){
    $(this).parent().hide();
  });
}

function openAbout(){
  $('body').on('click', 'img#about', function(){
    $('.about-section').show();
  });
}

function openSkills(){
  $('body').on('click', 'img#photo', function(){
    $('.photo-section').show();
  });
}

function openPortfolio(){
  $('body').on('click', 'img#portfolio', function(){
    $('.portfolio-section').show();
  });
}

function openContact(){
  $('body').on('click', 'img#contact', function(){
    $('.contact-section').show();
  });
}



/*div.expand-icon{
  width: 100%;
  height: 100%;
  top: 60px;
}*/

$(function(){

  openAbout();
  openSkills();
  openPortfolio();
  openContact();
  closeX();

});
