import $ from 'jquery'
import Alert from '@bsj/alert'
import Button from '@bsj/button'
import Carousel from '@bsj/carousel'
import Collapse from '@bsj/collapse'
import Dropdown from '@bsj/dropdown'
import Modal from '@bsj/modal'
import Popover from '@bsj/popover'
import Scrollspy from '@bsj/scrollspy'
import Tab from '@bsj/tab'
import Tooltip from '@bsj/tooltip'
import Util from '@bsj/util'

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(($) => {
  if (typeof $ === 'undefined') {
    throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
  }

  const version = $.fn.jquery.split(' ')[0].split('.')
  const minMajor = 1
  const ltMajor = 2
  const minMinor = 9
  const minPatch = 1
  const maxMajor = 4

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
})($)

export {
  Util,
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Popover,
  Scrollspy,
  Tab,
  Tooltip
}
