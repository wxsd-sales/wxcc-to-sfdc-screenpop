const s = document.createElement('script');
s.src = chrome.runtime.getURL('src/content/inject.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
