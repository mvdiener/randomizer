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
                console.log("Randomizer extension: Scrolled to bottom.");
            }
        }, 1000);

        scroll;
    }
    else {
        console.log("Randomizer extension: Cannot find correct divs for scrolling function.");
    }
}