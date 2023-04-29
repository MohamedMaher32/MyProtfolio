(function( $ ) {
  'use strict';

  //
  // Preloader
  jQuery(window).load(function() {
    jQuery(".preloader").delay(1000).fadeOut("slow");
  });

  $(document).ready(function(){

    //
    // Off-canvas Nav
    var body = $("body"),
        showBtn   = $(".navbar-show-btn"),
        closeBtn  = $(".navbar-close-btn, .nav > li > a");

    showBtn.on("click", function(e) {
      e.preventDefault();
      body.addClass("navbar-show");
    });
    closeBtn.on("click", function(e) {
      e.preventDefault();
      body.removeClass("navbar-show");
    });

    //
    // Smooth Scrolling
    $('a[href*=#]:not([href=#]), a.scroll-top[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 30
          }, 500);
          return false;
        }
      }
    });

    //
    // ScrollSpy
    body.scrollspy({
      target  : '.scrollspy',
      offset  : 35
    });

    //
    // mixItUp
    var portfolioGallery = $("#portfolioGallery");
    portfolioGallery.mixItUp({
      animation: {
        duration: 400,
        effects: 'translateZ(-360px) fade stagger(34ms) translateX(10%)',
        easing: 'cubic-bezier(0.39, 0.575, 0.565, 1)'
      }
    });

    // hide #back-top first
    $("#back-top").hide();

    //
    // ScrollTop
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('#goTop').fadeIn();
        } else {
          $('#goTop').fadeOut();
        }
      });

      $('#goTop').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    });

    //$(window).scroll();

  });

})(window.jQuery);