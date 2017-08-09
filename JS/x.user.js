// ==UserScript==
// @name         Project X
// @namespace    idk
// @version      beta v1
// @description  Extension Change
// @author       Nebula
// @match        http://agar.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// ==/UserScript==

if (window.location.pathname !== '/x') {
    window.location.href = 'http://agar.io/x' + window.location.hash;
    return;
}
history.pushState('', document.title, '/' + window.location.hash);
// Inject script
window.stop();
document.documentElement.innerHTML = "";
GM_xmlhttpRequest({
    method : "GET",
    url : "http://example.com/index.html",
    onload : function(e) {
        document.open();
        document.write(e.responseText);
        document.close();
    }
});

