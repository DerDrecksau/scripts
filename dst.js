// ==UserScript==
// @name         Standard Crossword
// @version      1.3.1
// @description  Create Link to original crossword
// @updateURL    https://github.com/DerDrecksau/scripts/raw/main/dst.js
// @downloadURL  https://github.com/DerDrecksau/scripts/raw/main/dst.js
// @match        https://www.derstandard.at/story/*/kreuzwortraetsel*
// @match        https://www.derstandard.at/story/*/standardraetsel*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=derstandard.at
// ==/UserScript==

(function() {
    'use strict';
    var url = document.getElementsByClassName('js-embed-template')[0].innerHTML.match(/(https:\/\/cdn-[^\.]*\.amuselabs\.com\/pmm\/crossword.id=[0-9a-f]*[^ ]*)\&quot/)[1].replaceAll('&amp;', '&');
    var link = document.createElement('a');
    link.setAttribute('href',url);
    link.setAttribute('style', 'text-align: center; display: block; font-size: x-large;');
    link.innerHTML = 'Zum Rätsel!';
    document.getElementsByTagName("body")[0].insertBefore(link,document.getElementsByTagName("body")[0].firstChild);
    window.addEventListener('load', function() {
        console.log('now');
        document.getElementsByClassName('js-embed-output')[0].innerHTML = '<iframe id="crossword-embed" height="750px" width="100%" allowfullscreen="true" style="border: none; width: 100% !important; position: center; size: large;  display: block !important; margin: 0 !important;"name="phoenixen" src="' + url + ' "> </iframe>'
    }, false);
})();
