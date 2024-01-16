const script = document.createElement('script');

// eslint-disable-next-line no-undef
script.setAttribute('data-id', chrome.runtime.id);
// eslint-disable-next-line no-undef
script.src = chrome.runtime.getURL('src/content/inject.js');
script.onload = function () {
  this.remove();
};

(document.head ?? document.documentElement).appendChild(script);
