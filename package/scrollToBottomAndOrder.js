if (window.location.href == "https://open.spotify.com/collection/albums") {
    var scrollDiv = document.getElementsByClassName("main-view-container__scroll-node")[0];
    var scrollDivChild = document.getElementsByClassName("main-view-container__scroll-node-child")[0];
    if (scrollDiv && scrollDivChild) {
        var scrollAttempts = 0;
        var currentHeight = scrollDivChild.scrollHeight;

        var scroll = setInterval(function () {
            scrollDiv.scrollTop = scrollDivChild.scrollHeight;
            if (scrollAttempts < 5) {
                if (currentHeight === scrollDivChild.scrollHeight) {
                    scrollAttempts++;
                }
                else {
                    currentHeight = scrollDivChild.scrollHeight;
                    scrollAttempts = 0;
                }
            }
            else {
                clearInterval(scroll);
                console.log("Randomizer extension: Scrolled to bottom. Ordering albums...");
                orderAlbums();
            }
        }, 1000);

        scroll;
    }
    else {
        console.log("Randomizer extension: Cannot find correct divs for scrolling function.");
    }
}

function orderAlbums() {
    var albumElement = document.querySelectorAll('.container-fluid--noSpaceAround')[0].children[0];
    var albumArray = Array.from(albumElement.children);
    var sortedArray = albumArray.sort(function (a, b) {
        aArtist = a.querySelector('.ellipsis-one-line span') == null ? a.querySelector('.ellipsis-one-line a').innerHTML.toLowerCase() : a.querySelector('.ellipsis-one-line span').innerText.toLowerCase();
        bArtist = b.querySelector('.ellipsis-one-line span') == null ? b.querySelector('.ellipsis-one-line a').innerHTML.toLowerCase() : b.querySelector('.ellipsis-one-line span').innerText.toLowerCase();

        if (aArtist < bArtist) return -1;
        if (aArtist > bArtist) return 1;
        return 0;
    })

    for (i = 0; i < sortedArray.length; i++) {
        albumElement.parentNode.appendChild(sortedArray[i])
    }
}