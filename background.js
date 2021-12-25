// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction
console.log("Backgound Script Starting !");

name1 = "skipper !"

console.info(name1);


function btnClicked(tab) {
    console.log({tab})
    browser.tabs.query({currentWindow: true}, tabs => console.log(tabs))
    browser.browserAction.disable()
}

/*
function logTabs(tabs) {
  console.log(tabs)
}


browser.browserAction.onClicked.addListener(listener)
browser.browserAction.onClicked.removeListener(listener)
browser.browserAction.onClicked.hasListener(listener)

browser.browserAction.onClicked.hasListener(listener)

 */

browser.browserAction.onClicked.addListener(btnClicked)

function exorcise() {
  // highlight the elements under cursor and delete them on user click !
}