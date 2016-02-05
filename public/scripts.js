// Behaviors

function closeX(){
  $('body').on('click', '.x-icon', function(){
    $(this).parent().hide();
  });
}

function openIcons(){
  $('body').on('click', 'img#about', function(){
    $('.about-section').show();
  });
  $('body').on('click', 'img#photo', function(){
    $('.photo-section').show();
  });
  $('body').on('click', 'img#portfolio', function(){
    $('.portfolio-section').show();
  });
  $('body').on('click', 'img#contact', function(){
    $('.contact-section').show();
  });
}

function animateAboutIcon(){
  $('img#about').animate({
    top: "+=10px"
  }, 800, function(){
    $('img#about').animate({
      top: "-=10px"
    }, 800, function(){
      animateAboutIcon();
    })
  });
}

function animateSkillsIcon(){
    $('img#photo').animate({
      top: "+=10px"
    }, 800, function(){
      $('img#photo').animate({
        top: "-=10px"
      }, 800, function(){
        animateSkillsIcon();
      })
    });
}

function animatePortfolioIcon(){
  $('img#portfolio').animate({
    top: "+=10px"
  }, 800, function(){
    $('img#portfolio').animate({
      top: "-=10px"
    }, 800, function(){
      animatePortfolioIcon();
    })
  });
}

function animateContactIcon(){
  $('img#contact').animate({
    top: "+=10px"
  }, 800, function(){
    $('img#contact').animate({
      top: "-=10px"
    }, 800, function(){
      animateContactIcon();
    })
  });
}

$(function(){

  animateAboutIcon();
  setTimeout(function(){
    animateSkillsIcon();
  }, 400);
  setTimeout(function(){
    animatePortfolioIcon();
  }, 800);
  setTimeout(function(){
    animateContactIcon();
  }, 1200);

  openIcons();

  closeX();

});
