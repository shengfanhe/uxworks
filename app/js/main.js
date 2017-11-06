$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

(function($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict

//Scroll to fade element
var fade_element = $('.parallax-bg');

$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    fade_element.css({
        'opacity' : 1 - st/500
    });
});

//Parallax scrolling effect
$(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var imgPos = scrollTop / 2.5 + 'px';
        $('.parallax-bg').css('transform', 'translateY(' + imgPos + ')');
    });

//Hover to play video
var figure = $(".work-img").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
  $('video', this).get(0).play();
}
function hideVideo(e) {
  $('video', this).get(0).pause();
}

//nav dropdown
$(document).ready(function() {
    var triggerOpen     = $('#input');
    var triggerClose    = $('#dropdown-menu').find('a');
    var navButton       = $('#nav-icon1');

    // trigger dropdown
    triggerOpen.add(navButton).on('click', function(e) {
        e.preventDefault();
        $('#dropdown-menu').add(triggerOpen).toggleClass('open');
    });

    triggerClose.on('click', function() {
        // set new placeholder for demo
        var options = $(this).find('a').html();
        triggerOpen.text(options);

        $('#dropdown-menu').add(triggerOpen).toggleClass('open');
    });

    navButton.on('click', function() {
      if($('#dropdown-menu').hasClass('open')){
        $('body').addClass('noscroll');
        $('#logo').attr('src','img/logo2.png')
      }else if($('body').hasClass('noscroll')){
        $('body').removeClass('noscroll');
        $('#logo').attr('src','img/logo.png')
      }
    });
});

//scroll fix
$(document).scroll(function() {
    var scrollDistance = $(document).scrollTop();
    var entryPosition = $("#reference").position().top + 120;
    var stickyMenu = $(".category");
    if(scrollDistance >= entryPosition) {
        stickyMenu.css({
          "position" : "fixed",
          "top" : "0",
          "text-align" : "center",
          "padding" : "50px 0 15px 90px",
          "z-index" : "980",
          "width" : "100vw",
          "background-color" : "rgba(255, 255, 255, 0.96)",
          "box-shadow" : "0 0 0.8em rgba(0, 0, 0, 0.05)"
        });
        $(".category-title").addClass("hidden");
    } else {
        stickyMenu.css({
          "position" : "absolute",
          "box-shadow" : "none",
          "padding" : "50px 0 15px 0",
					"top" : "",
          "background-color" : "transparent"
        });
        $(".category-title").removeClass("hidden");
    }
});
