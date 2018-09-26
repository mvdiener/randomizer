chrome.contextMenus.create({
    "title": "Order Albums by Artist",
    "contexts": ["browser_action"]
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    chrome.tabs.executeScript({
        file: 'orderAlbums.js'
    });
})