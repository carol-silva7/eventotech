(function ($) {
  "use strict";

  $(window).on("load", function () {
    /*Page Loader active
      ========================================================*/
    // Sticky Nav
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 200) {
        $(".scrolling-navbar").addClass("top-nav-collapse");
      } else {
        $(".scrolling-navbar").removeClass("top-nav-collapse");
      }
    });

    $(".set-bg").each(function () {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
    $("#clock").countdown("2020/08/10", function (event) {
      var $this = jQuery(this).html(
        event.strftime(
          "" +
          '<div class="time-entry days"><span>%-D</span> Dias</div> ' +
          '<div class="time-entry hours"><span>%H</span> Horas</div> ' +
          '<div class="time-entry minutes"><span>%M</span> Minutos</div> ' +
          '<div class="time-entry seconds"><span>%S</span> Segundos</div> '
        )
      );
    });
    /* slicknav mobile menu active  */
    $(".mobile-menu").slicknav({
      prependTo: ".navbar-header",
      parentTag: "liner",
      allowParentLinks: true,
      duplicate: true,
      label: "",
    });

    /* WOW Scroll Spy
  ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false,
    });
    wow.init();
    /* Nivo Lightbox
    ========================================================*/
    $(".lightbox").nivoLightbox({
      effect: "fadeScale",
      keyboardNav: true,
    });
    // one page navigation
    $(".navbar-nav").onePageNav({
      currentClass: "active",
    });

    /* background  img card
    ========================================================*/
    $(".set-bg").each(function () {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });

    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $(".back-to-top").fadeIn(400);
      } else {
        $(".back-to-top").fadeOut(400);
      }
    });
    $(".back-to-top").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });

    /* filter courses
      ========================================================*/

    $(document).ready(function () {

      $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
        }
        else {
          //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
          //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.' + value).hide('3000');
          $('.filter').filter('.' + value).show('3000');

        }
      });

      if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
      }
      $(this).addClass("active");

    });
  });


})(jQuery);
