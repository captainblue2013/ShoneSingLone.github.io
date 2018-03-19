"use strict";
/**
 * Install plugin
 * @param Vue
 * @param jQuery
 */

export default function plugin(Vue, jQuery) {

  if (plugin.installed) {
    return;
  }
  plugin.installed = true;

  if (!jQuery) {
    console.error('You have to install jQuery');
    return;
  }

  Vue.jQuery = jQuery;

  Object.defineProperties(Vue.prototype, {

    jQuery: {
      get: function get() {
        return jQuery;
      }
    },

    $jq: {
      get: function get() {
        return jQuery;
      }
    }
  });
}
