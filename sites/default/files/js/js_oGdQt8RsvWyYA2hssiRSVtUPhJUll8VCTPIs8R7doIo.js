!function(a,b,c){"use strict";Drupal.behaviors.atdoubleTap={attach:function(){a.fn.doubleTapToGo=function(d){return"ontouchstart"in b||navigator.msMaxTouchPoints||navigator.userAgent.toLowerCase().match(/windows phone os 7/i)?("unbind"===d?this.each(function(){a(this).off(),a(c).off("click touchstart MSPointerDown",handleTouch)}):this.each(function(){function b(b){for(var c=!0,e=a(b.target).parents(),f=0;f<e.length;f++)e[f]==d[0]&&(c=!1);c&&(d=!1)}var d=!1;a(this).on("click",function(b){var c=a(this);c[0]!=d[0]&&(b.preventDefault(),d=c)}),a(c).on("click touchstart MSPointerDown",b)}),this):!1}}}}(jQuery,window,document);

!function(a,b,c){"use strict";Drupal.behaviors.atrM={attach:function(d,e){function f(c){c.preventDefault(),c.stopPropagation(),a(b.body).toggleClass("rm-is-open"),"true"==a(this).attr("aria-expanded")?(a(this).attr("aria-expanded","false"),a("#rm-toggle__icon--use").attr("xlink:href","#rm-toggle__icon--open")):"false"==a(this).attr("aria-expanded")&&(a(this).attr("aria-expanded","true"),a("#rm-toggle__icon--use").attr("xlink:href","#rm-toggle__icon--close")),a(b).one("click",function(c){0===a(".rm-block").has(c.target).length&&(a(b.body).removeClass("rm-is-open"),a(m).attr("aria-expanded","false"),a("#rm-toggle__icon--use").attr("xlink:href","#rm-toggle__icon--open"))})}function g(b){b.preventDefault(),b.stopPropagation(),a(this).toggleClass("is-open--parent"),"true"==a(this).attr("aria-expanded")?a(this).attr("aria-expanded","false"):"false"==a(this).attr("aria-expanded")&&a(this).attr("aria-expanded","true"),a(this).parent().next(".is-child").toggleClass("is-open--child")}function h(b){var c=a("#rm-accordion-trigger").html();a(b).each(function(){0==a(this).next(".rm-accordion-trigger").length&&a(this).after(c);var b=a(this).parent().parent().attr("id");a(this).next().attr("aria-controls",b+"__child-menu"),a(this).parent().next(".is-child").attr("id",b+"__child-menu")})}if(a(".rm-block").removeClass("js-hide"),c.matchMedia("only screen").matches){var i=e.ajaxPageState.theme,j=e[i].at_responsivemenus,k=j["default"],l=j.responsive,m=".rm-block .rm-toggle__link",n=j.acd.acd_default,o=j.acd.acd_responsive,p=j.acd.acd_both,q=j.acd.acd_load;a(m,d).on("click",f),enquire.register(j.bp,{setup:function(){a(b.body).addClass(k),a(".rm-block").parent(".l-r").addClass("rm-region").parent(".l-rw").addClass("rm-row"),"ms-dropmenu"==k&&a(".rm-block__content li:has(ul)").doubleTapToGo(),1==n&&1==q&&(a(".rm-block .menu-level-1").addClass("ms-accordion"),a.ready(h(".ms-accordion .is-parent__wrapper a")),a(".ms-accordion .rm-accordion-trigger",d).on("click",g))},match:function(){"ms-none"!==l&&l!==k&&(a(b.body).removeClass(k).addClass(l),1==q&&(1==o?0==p&&(a(".rm-block .menu-level-1").addClass("ms-accordion"),a.ready(h(".ms-accordion .is-parent__wrapper a")),a(".ms-accordion .rm-accordion-trigger",d).on("click",g)):(a(".ms-accordion .rm-accordion-trigger").remove(),a(".rm-block .menu-level-1").removeClass("ms-accordion"),a(".rm-block .menu").removeClass("is-open--child"))),"ms-dropmenu"==l?a(".rm-block__content li:has(ul)").doubleTapToGo():a(".rm-block__content li:has(ul)").doubleTapToGo("unbind"))},unmatch:function(){a(b.body).addClass(k),1==q&&(1==n?0==p&&(a(".rm-block .menu-level-1").addClass("ms-accordion"),a.ready(h(".ms-accordion .is-parent__wrapper a")),a(".ms-accordion .rm-accordion-trigger",d).on("click",g)):(a(".ms-accordion .rm-accordion-trigger").remove(),a(".rm-block .menu-level-1").removeClass("ms-accordion"),a(".rm-block .menu").removeClass("is-open--child"))),"ms-dropmenu"==k?a(".rm-block__content li:has(ul)").doubleTapToGo():a(".rm-block__content li:has(ul)").doubleTapToGo("unbind"),l!==k&&a(b.body).removeClass(l)}})}}}}(jQuery,document,window);

/**
 * @file
 * Adapted from underscore.js with the addition Drupal namespace.
 */

/**
 * Limits the invocations of a function in a given time frame.
 *
 * The debounce function wrapper should be used sparingly. One clear use case
 * is limiting the invocation of a callback attached to the window resize event.
 *
 * Before using the debounce function wrapper, consider first whether the
 * callback could be attached to an event that fires less frequently or if the
 * function can be written in such a way that it is only invoked under specific
 * conditions.
 *
 * @param {function} func
 *   The function to be invoked.
 * @param {number} wait
 *   The time period within which the callback function should only be
 *   invoked once. For example if the wait period is 250ms, then the callback
 *   will only be called at most 4 times per second.
 * @param {bool} immediate
 *   Whether we wait at the beginning or end to execute the function.
 *
 * @return {function}
 *   The debounced function.
 */
Drupal.debounce = function (func, wait, immediate) {

  'use strict';

  var timeout;
  var result;
  return function () {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};
;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
/**
 * @file
 * Form features.
 */

/**
 * Triggers when a value in the form changed.
 *
 * The event triggers when content is typed or pasted in a text field, before
 * the change event triggers.
 *
 * @event formUpdated
 */

(function ($, Drupal, debounce) {

  'use strict';

  /**
   * Retrieves the summary for the first element.
   *
   * @return {string}
   *   The text of the summary.
   */
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return (this[0] && callback) ? $.trim(callback(this[0])) : '';
  };

  /**
   * Sets the summary for all matched elements.
   *
   * @param {function} callback
   *   Either a function that will be called each time the summary is
   *   retrieved or a string (which is returned each time).
   *
   * @return {jQuery}
   *   jQuery collection of the current element.
   *
   * @fires event:summaryUpdated
   *
   * @listens event:formUpdated
   */
  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    // To facilitate things, the callback should always be a function. If it's
    // not, we wrap it into an anonymous function which just returns the value.
    if (typeof callback !== 'function') {
      var val = callback;
      callback = function () { return val; };
    }

    return this
      .data('summaryCallback', callback)
      // To prevent duplicate events, the handlers are first removed and then
      // (re-)added.
      .off('formUpdated.summary')
      .on('formUpdated.summary', function () {
        self.trigger('summaryUpdated');
      })
      // The actual summaryUpdated handler doesn't fire when the callback is
      // changed, so we have to do this manually.
      .trigger('summaryUpdated');
  };

  /**
   * Prevents consecutive form submissions of identical form values.
   *
   * Repetitive form submissions that would submit the identical form values
   * are prevented, unless the form values are different to the previously
   * submitted values.
   *
   * This is a simplified re-implementation of a user-agent behavior that
   * should be natively supported by major web browsers, but at this time, only
   * Firefox has a built-in protection.
   *
   * A form value-based approach ensures that the constraint is triggered for
   * consecutive, identical form submissions only. Compared to that, a form
   * button-based approach would (1) rely on [visible] buttons to exist where
   * technically not required and (2) require more complex state management if
   * there are multiple buttons in a form.
   *
   * This implementation is based on form-level submit events only and relies
   * on jQuery's serialize() method to determine submitted form values. As such,
   * the following limitations exist:
   *
   * - Event handlers on form buttons that preventDefault() do not receive a
   *   double-submit protection. That is deemed to be fine, since such button
   *   events typically trigger reversible client-side or server-side
   *   operations that are local to the context of a form only.
   * - Changed values in advanced form controls, such as file inputs, are not
   *   part of the form values being compared between consecutive form submits
   *   (due to limitations of jQuery.serialize()). That is deemed to be
   *   acceptable, because if the user forgot to attach a file, then the size of
   *   HTTP payload will most likely be small enough to be fully passed to the
   *   server endpoint within (milli)seconds. If a user mistakenly attached a
   *   wrong file and is technically versed enough to cancel the form submission
   *   (and HTTP payload) in order to attach a different file, then that
   *   edge-case is not supported here.
   *
   * Lastly, all forms submitted via HTTP GET are idempotent by definition of
   * HTTP standards, so excluded in this implementation.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.formSingleSubmit = {
    attach: function () {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        }
        else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit')
        .on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  /**
   * Sends a 'formUpdated' event each time a form element is modified.
   *
   * @param {HTMLElement} element
   *   The element to trigger a form updated event on.
   *
   * @fires event:formUpdated
   */
  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  /**
   * Collects the IDs of all form fields in the given form.
   *
   * @param {HTMLFormElement} form
   *   The form element to search.
   *
   * @return {Array}
   *   Array of IDs for form fields.
   */
  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      // We use id to avoid name duplicates on radio fields and filter out
      // elements with a name but no id.
      return element.getAttribute('id');
    });
    // Return a true array.
    return $.makeArray($fieldList);
  }

  /**
   * Triggers the 'formUpdated' event on form elements when they are modified.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches formUpdated behaviors.
   * @prop {Drupal~behaviorDetach} detach
   *   Detaches formUpdated behaviors.
   *
   * @fires event:formUpdated
   */
  Drupal.behaviors.formUpdated = {
    attach: function (context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields;

      if ($forms.length) {
        // Initialize form behaviors, use $.makeArray to be able to use native
        // forEach array method and have the callback parameters in the right
        // order.
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) { triggerFormUpdated(event.target); }, 300);
          formFields = fieldsList(form).join(',');

          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }
      // On ajax requests context is the form element.
      if (contextIsForm) {
        formFields = fieldsList(context).join(',');
        // @todo replace with form.getAttribute() when #1979468 is in.
        var currentFields = $(context).attr('data-drupal-form-fields');
        // If there has been a change in the fields or their order, trigger
        // formUpdated.
        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }

    },
    detach: function (context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };

  /**
   * Prepopulate form fields with information from the visitor browser.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for filling user info from browser.
   */
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function (context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
      if ($forms.length) {
        userInfo.map(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          var browserData = localStorage.getItem('Drupal.visitor.' + info);
          var emptyOrDefault = ($element.val() === '' || ($element.attr('data-drupal-default-value') === $element.val()));
          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.map(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          if ($element.length) {
            localStorage.setItem('Drupal.visitor.' + info, $element.val());
          }
        });
      });
    }
  };

})(jQuery, Drupal, Drupal.debounce);
;
!function(a,b,c){"use strict";Drupal.behaviors.atBP={attach:function(a,d){function e(a,b){enquire.register(b,{match:function(){c.body.classList.add("bp--"+a)},unmatch:function(){c.body.classList.remove("bp--"+a)}})}if(b.matchMedia("only screen").matches){var f=d.ajaxPageState.theme,g=d[f].at_breakpoints;for(var h in g)g.hasOwnProperty(h)&&e(h.split("_").join("-"),g[h].mediaquery)}}}}(jQuery,window,document);
