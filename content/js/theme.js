(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
	typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
	(factory((global.gameforest = {}),global.jQuery));
}(this, (function (exports,$) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: helpers.js
 * Copyright (c) 2019 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.3
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var DATA_OPTION = 'ya-option';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Helpers =
/*#__PURE__*/
function () {
  function Helpers() {
    this.options = [];
  }

  var _proto = Helpers.prototype;

  _proto.loopArray = function loopArray(element, value) {
    var _this = this;

    if (element.substring(element.length - 1) === ';') {
      element = element.substring(0, element.length - 1);
    }

    return element.split(';').forEach(function (s) {
      var arr = s.split(':');
      value[_this.replaceString(arr[0])] = _this.replaceString(arr[1]);
    });
  };

  _proto.replaceString = function replaceString(string) {
    return string.replace(/\s/g, '');
  };

  _proto.disqus = function disqus(selector) {
    var script = document.createElement('script');
    var iframe = document.createElement('div'); // create script for header

    script.src = "https://" + window.gameforest.disqus + ".disqus.com/embed.js";
    script.setAttribute('data-timestamp', +Number(new Date()));
    iframe.id = 'disqus_thread';
    document.querySelector(selector).appendChild(iframe); // append script

    document.head.appendChild(script);
    document.body.appendChild(script);
    return true;
  };

  _proto.facebook = function facebook(selector) {
    var script = document.createElement('script');
    var root = document.createElement('div');
    var iframe = document.createElement('div');
    script.src = "https://connect.facebook.net/" + window.gameforest.facebook.lang + "/sdk.js#xfbml=1&version=" + window.gameforest.facebook.version + "&appId=" + window.gameforest.facebook.id;
    root.id = 'fb-root';
    iframe.className = 'fb-comments';
    iframe.setAttribute('data-width', '100%');
    iframe.setAttribute('data-numposts', '10');
    iframe.setAttribute('data-href', window.location.href);
    document.querySelector(selector).appendChild(iframe);

    if (!document.getElementById(root.id)) {
      document.body.appendChild(script);
      document.body.appendChild(root);
    }

    return true;
  };

  _proto.vimeo = function vimeo(option) {
    // check data option
    if (option) {
      this.loopArray(option, this.options);
    } // player


    var player = {
      autoplay: this.options.autoplay ? this.options.autoplay : 1,
      loop: this.options.loop ? 1 : 0,
      quality: this.options.quality ? this.options.quality : '1080p',
      mute: this.options.mute ? this.options.mute : 0
    };
    return "?autoplay=" + player.autoplay + "&amp;muted=" + player.mute + "&amp;quality=" + player.quality + "&amp;loop=" + player.loop;
  };

  _proto.youtube = function youtube(option, id) {
    // check data option
    if (option) {
      this.loopArray(option, this.options);
    } // player


    var player = {
      controls: this.options.controls ? this.options.controls : 1,
      autoplay: this.options.autoplay ? this.options.autoplay : 1,
      mute: this.options.mute ? this.options.mute : 0,
      loop: this.options.loop ? this.options.loop + "&amp;playlist=" + id : 0,
      start: this.options.start ? this.options.start : 0
    };
    return "?rel=0&amp;autoplay=" + player.autoplay + "&amp;controls=" + player.controls + "&amp;mute=" + player.mute + "&amp;start=" + player.start + "&amp;loop=" + player.loop;
  };

  _proto.video = function video(src) {
    // get option data attribute
    var option = src.getAttribute(DATA_OPTION); // youtube

    if (this._attr.includes('youtube')) {
      var id = this._attr.split('v=')[1];

      src = "https://www.youtube.com/embed/" + (id + this.youtube(option, id));
    } // vimeo


    if (this._attr.includes('vimeo')) {
      var _id = this._attr.split('https://vimeo.com/')[1];

      src = "https://player.vimeo.com/video/" + (_id + this.vimeo(option));
    } // twitch


    if (this._attr.includes('twitch')) {
      if (this._attr.split('clips.twitch.tv/')[1]) {
        var _id2 = this._attr.split('clips.twitch.tv/')[1];

        src = "https://clips.twitch.tv/embed?autoplay=true&clip=" + _id2 + "&tt_content=embed&tt_medium=clips_embed";
      } else {
        var _id3 = this._attr.split('videos/')[1];

        src = "https://player.twitch.tv/?autoplay=true&video=v" + _id3;
      }
    }

    return src;
  };

  return Helpers;
}();

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: carousel.js
 * Copyright (c) 2019 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.3
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var VERSION$1 = '1.0.0';
var DATA$1 = 'ya-carousel';
var DATA_KEY$1 = "[" + DATA$1 + "]";
var ClassName$1 = {
  CAROUSEL: 'owl-carousel',
  THEME: 'owl-carousel-theme',
  HEIGHT: 'owl-height-100'
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var Carousel =
/*#__PURE__*/
function (_Helpers) {
  _inheritsLoose(Carousel, _Helpers);

  function Carousel(element) {
    var _this;

    _this = _Helpers.call(this) || this;
    _this._element = element;
    _this._attr = element.getAttribute(DATA$1);
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto._option = function _option() {
    if (this._attr) {
      this.loopArray(this._attr, this.options);
    }

    return this.options;
  };

  _proto._add = function _add() {
    var num = 100;
    var id = Math.floor(Math.random() * num);
    var carousel = ClassName$1.CAROUSEL + "-" + id; // add otpion

    this._option(); // check height


    if (this.options.height) {
      this._element.classList.add(ClassName$1.HEIGHT);
    } // set class


    this._element.classList.add(ClassName$1.THEME, carousel); // init carousel


    return $("." + carousel).owlCarousel({
      autoplay: this.options.autoplay ? true : 0,
      autoplaySpeed: this.options.autoplayspeed ? Number(this.options.autoplayspeed) : '',
      loop: this.options.loop ? 0 : true,
      nav: this.options.nav ? 0 : true,
      dots: this.options.dots ? 0 : true,
      items: this.options.items ? Number(this.options.items) : 1,
      margin: this.options.margin ? Number(this.options.margin) : 0,
      center: this.options.center ? true : 0,
      autoWidth: this.options.autowidth ? true : 0,
      slideBy: this.options.slideItem ? Number(this.options.slideItem) : 1,
      responsive: {
        0: {
          items: this.options.xs ? Number(this.options.xs) : 1,
          autoWidth: false,
          margin: 0
        },
        720: {
          items: this.options.sm ? Number(this.options.sm) : 1
        },
        991: {
          items: this.options.md ? Number(this.options.md) : this.options.items
        },
        1140: {
          items: this.options.items ? Number(this.options.items) : 1
        }
      }
    });
  } // private
  ;

  _proto._get = function _get() {
    return this._add();
  } // static
  ;

  Carousel._init = function _init() {
    var data = new Carousel(this);

    data._get();
  };

  _createClass(Carousel, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$1;
    }
  }]);

  return Carousel;
}(Helpers);
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA_KEY$1).forEach(function (el) {
    Carousel._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: navbar.js
 * Copyright (c) 2019 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.3
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var VERSION$7 = '1.0.0';
var Selector$1 = {
  NAVBAR: '.navbar',
  SEARCH: '.navbar-search',
  ICON: '.toggle-search',
  CLOSE: '.search-close'
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var Navbar =
/*#__PURE__*/
function () {
  function Navbar() {
    this._element = document.querySelector(Selector$1.SEARCH);
    this._close = document.querySelector(Selector$1.CLOSE);
    this._icon = document.querySelector(Selector$1.ICON);
  }

  var _proto = Navbar.prototype;

  _proto._fix = function _fix() {
    $('.dropdown-lg').on('hide.bs.dropdown', function () {
      document.querySelector('.owl-carousel').classList.add('owl-hide');
    });
    $('.dropdown-lg').on('show.bs.dropdown', function () {
      document.querySelector('.owl-carousel').classList.remove('owl-hide');
    });
  };

  _proto._hover = function _hover() {
    $('.dropdown > .dropdown-menu > .dropdown').hover(function () {
      $(this).toggleClass('show');
    });
    $('.dropdown > .dropdown-menu > .dropdown > .dropdown-item').click(function (e) {
      e.preventDefault();
      return false;
    });
  } // private
  ;

  _proto._toggle = function _toggle() {
    return this._element.classList.toggle('active');
  };

  _proto._remove = function _remove() {
    return this._element.classList.remove('active');
  };

  _proto._get = function _get() {
    var _this = this;

    if (this._icon) {
      this._icon.addEventListener('click', function (e) {
        e.preventDefault();

        _this._toggle();
      }, false);

      this._close.addEventListener('click', function (e) {
        e.preventDefault();

        _this._remove();
      }, false);
    }

    this._fix();

    this._hover();
  } // static
  ;

  Navbar._init = function _init() {
    var data = new Navbar(this);

    data._get();
  };

  _createClass(Navbar, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$7;
    }
  }]);

  return Navbar;
}();
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(Selector$1.NAVBAR).forEach(function (el) {
    Navbar._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: style.js
 * Copyright (c) 2019 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.3
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var DATA$9 = 'ya-style';
var DATA_KEY$8 = "[" + DATA$9 + "]";
var VERSION$11 = '1.0.0';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Style =
/*#__PURE__*/
function (_Helpers) {
  _inheritsLoose(Style, _Helpers);

  function Style(element) {
    var _this;

    _this = _Helpers.call(this) || this;
    _this._element = element;
    _this._attr = element.getAttribute(DATA$9);
    _this.option = [];
    return _this;
  }

  var _proto = Style.prototype;

  // private
  _proto._set = function _set(option) {
    var Defaults = {
      bg: option['background-color'] ? "background-color: " + option['background-color'] + " !important;" : '',
      height: option.height ? "height: " + option.height + " !important;" : '',
      opacity: option.opacity ? "opacity: " + option.opacity + " !important;" : '',
      borderColor: option['border-color'] ? "border-color: " + option['border-color'] + ";" : ' '
    };
    return Defaults.height + Defaults.bg + Defaults.opacity + Defaults.borderColor;
  };

  _proto._get = function _get() {
    this.loopArray(this._attr, this.option);
    this._element.style.cssText = this._set(this.option);

    this._element.removeAttribute(DATA$9);
  } // static
  ;

  Style._init = function _init() {
    var data = new Style(this);

    data._get();
  };

  _createClass(Style, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$11;
    }
  }]);

  return Style;
}(Helpers);
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA_KEY$8).forEach(function (el) {
    Style._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: theme.js
 * Copyright (c) 2019 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.3
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Theme =
/*#__PURE__*/
function () {
  function Theme() {}

  var _proto = Theme.prototype;

  _proto._bootstrap = function _bootstrap() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
  } // private
  ;

  _proto._load = function _load() {
    this._bootstrap();
  } // static
  ;

  Theme._init = function _init() {
    var data = new Theme();

    data._load();
  };

  return Theme;
}();
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  Theme._init.call();
});

exports.Carousel = Carousel;
exports.Navbar = Navbar;
exports.Style = Style;
exports.Theme = Theme;

Object.defineProperty(exports, '__esModule', { value: true });

})));
