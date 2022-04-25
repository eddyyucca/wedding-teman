$(document).ready(function() {
"use strict";

  // Clock
  $('.counter').countdown('2016/12/31').on('update.countdown', function(e) {
    var $this = $(this).html(e.strftime('%D'));
  });
  
  // Menu Scroll
  $('.header ul li a').on('click', function(e) {
    $('.header ul li a').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 2000);
    e.preventDefault();
  });

  //var rosesTop = Math.round($('.roses').offset().top);
  var rosesTop = $('.roses').offset().top;
  var rosesrTop = $('.roses-r').offset().top;

  $(window).scroll(function () {

     $('.roses').css({
        'top' : rosesTop -($(this).scrollTop()/3)+"px"
     });

     $('.roses-r').css({
        'top' : rosesrTop -($(this).scrollTop()/3)+"px"
     });

     console.log($('.roses').css('top'));

  });

  // Flex Slider
  $('.slides').flexslider({
    animation: 'slide',
    selector: 'ul li',
    controlNav: true,
    directionNav: false,
    slideshowSpeed: 3600,
    animationSpeed: 1200,
    /*
    prevText: '<i class="fa fa-chevron-left"></i>',
    nextText: '<i class="fa fa-chevron-right"></i>'
    */
  });

});