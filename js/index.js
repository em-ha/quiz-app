console.clear();

const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", (event) => {
    if (bookmark.getAttribute("src") === "./assets/bookmark_filled.svg") {
        bookmark.setAttribute("src", "./assets/bookmark.svg");
    } else {
        bookmark.setAttribute("src", "./assets/bookmark_filled.svg");
    }

});