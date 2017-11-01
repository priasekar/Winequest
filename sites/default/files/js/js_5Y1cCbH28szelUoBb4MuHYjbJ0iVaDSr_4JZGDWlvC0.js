// Eliminate FOIT (Flash of Invisible Text) caused by web fonts loading slowly
// using font events with Font Face Observer.
(function ($) {

  "use strict";

  Drupal.behaviors.atFFOI = {
    attach: function () {

      $('html').addClass('fa-loading');

      var fontObserver = new FontFaceObserver('FontAwesome');

      // Because we are loading an icon font we need a unicode code point.
      fontObserver.load('\uf287\uf142\uf0fc').then(function () {
        $('html').removeClass('fa-loading').addClass('fa-loaded');
      }, function() {
        $('html').removeClass('fa-loading').addClass('fa-unavailable');
      });

    }
  };
}(jQuery));;
!function(a,b){"use strict";if(a("table.forum").addClass("responsive-enabled"),a("table.responsive-enabled").wrap('<div class="responsive-table"><div class="responsive-table__scroll"></div></div>'),a("table.responsive-enabled").prop("scrollWidth")>a(".responsive-table").width()){var c=b.t("Scroll to view");a(".responsive-table__scroll").append('<div class="responsive-table__message"><em>'+c+"</em></div>"),a("table.responsive-enabled").addClass("has-overflow")}}(jQuery,Drupal);
