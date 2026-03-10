// ==UserScript==
// @name         AMQ Extra Song Info Fix
// @namespace    https://github.com/Monofly
// @version      2.1.0
// @description  Makes the extra song info popover appear above the icon instead of below.
// @author       Floth
// @match        https://animemusicquiz.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    // fires right before the popover shows, after AMQ has initialised it
    $(document).on('show.bs.popover', '#qpExtraSongInfo', function () {
        const instance = $(this).data('bs.popover') || $(this).data('popover');
        if (instance && instance.options) {
            instance.options.placement = 'top';
        }
    });

})();
