if (window.location.href == "https://open.spotify.com/collection/albums") {
    var scrollDiv = document.getElementsByClassName("main-view-container__scroll-node")[0];
    var scrollDivChild = document.getElementsByClassName("main-view-container__scroll-node-child")[0];
    if (scrollDiv && scrollDivChild) {
        var scrollAttempts = 0;
        var currentHeight = scrollDivChild.scrollHeight;

        var scroll = setInterval(function () {
            scrollDiv.scrollTop = scrollDivChild.scrollHeight;
            if (scrollAttempts < 3) {
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
        }, 800);

        scroll;
    }
    else {
        console.log("Randomizer extension: Cannot find correct divs for scrolling function.");
    }
}

function orderAlbums() {
    var albumElement = document.querySelectorAll('.contentSpacing')[0].children[1].children[0].children[0];
    var albumArray = Array.from(albumElement.children);
    var sortedArray = albumArray.sort(function (a, b) {
        aArtist = a.querySelector('.react-contextmenu-wrapper').getElementsByTagName('a')[1].innerText.toLowerCase();
        bArtist = b.querySelector('.react-contextmenu-wrapper').getElementsByTagName('a')[1].innerText.toLowerCase();

        if (aArtist < bArtist) return -1;
        if (aArtist > bArtist) return 1;
        return 0;
    });

    for (i = 0; i < sortedArray.length; i++) {
        albumElement.appendChild(sortedArray[i])
    };
}