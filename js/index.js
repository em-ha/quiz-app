console.clear();

const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
    if (bookmark.getAttribute("src") === "./assets/bookmark_filled.svg") {
        bookmark.setAttribute("src", "./assets/bookmark.svg");
    } else {
        bookmark.setAttribute("src", "./assets/bookmark_filled.svg");
    }

});

const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer-text"]');

answerButton.addEventListener("click", () => {
    if (answerText.hidden) {
        answerText.hidden = false;
        answerButton.textContent = "Hide answer";
    } else {
        answerText.hidden = true;
        answerButton.textContent = "Show answer";
    }

});