/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        var h_Window = $(window).height();
        var w_Window = $(window).width();
        function setHeight() {
          h_Window = $(window).height();
          //HOME
          $('#home').css('height', h_Window);
        }
        $(document).ready(function(){
          setHeight();
          $(window).resize(setHeight);

          $(".lastProject").click(function(){
            var url = $(this).data('surl');
            window.open(url, '_blank');
          });
        });
        $(window).load(function() {
          $(".grid-loader-container").fadeTo( "fast" , 0, function() {
            $(this).hide();
          });
        });
        

      },
      finalize: function() {
      }
    },
    // Home page
    'home': {
      init: function() {

      },
      finalize: function() {

      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
