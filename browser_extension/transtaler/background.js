chrome.runtime.onInstalled.addListener(function() {
    chrome.browserAction.setBadgeText({
        text: 'hello world'
    });
    chrome.browserAction.setBadgeBackgroundColor({
        color: "#880000"
    });
});