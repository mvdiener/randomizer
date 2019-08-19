chrome.contextMenus.create({
    "title": "Order Albums by Artist",
    "id": "order",
    "contexts": ["browser_action"]
});

chrome.contextMenus.create({
    "title": "Scroll to Bottom of Albums",
    "id": "scroll",
    "contexts": ["browser_action"]
});

chrome.contextMenus.create({
    "title": "Scroll to Bottom + Order by Artist",
    "id": "scrollAndOrder",
    "contexts": ["browser_action"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "order") {
        chrome.tabs.executeScript({
            file: 'orderAlbums.js'
        });
    };

    if (info.menuItemId === "scroll") {
        chrome.tabs.executeScript({
            file: 'scrollToBottom.js'
        });
    };

    if (info.menuItemId === "scrollAndOrder") {
        chrome.tabs.executeScript({
            file: 'scrollToBottomAndOrder.js'
        });
    };
});