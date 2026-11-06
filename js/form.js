console.clear();

const form = document.querySelector('[data-js="form"]');



const questionCount = form.elements["question-text"];

const questionCountText = document.createElement("p");
    //questionCountText.classList.add("");
    questionCountText.classList.add("card__answer");
    questionCountText.textContent = "150 characters left";
    questionCount.after(questionCountText);

questionCount.addEventListener("input", (event) => {
    const length = questionCount.value.length;
    //console.log(length)
    const charactersLeft = 150 - length;
    //console.log(charactersLeft);
    questionCountText.textContent = charactersLeft + " characters left";
    
});


const answerCount = form.elements["answer-text"];

const answerCountText = document.createElement("p");
    //answerCountText.classList.add("");
    answerCountText.classList.add("card__answer");
    answerCountText.textContent = "150 characters left";
    answerCount.after(answerCountText);

answerCount.addEventListener("input", (event) => {
    const length = answerCount.value.length;
    //console.log(length)
    const charactersLeft = 150 - length;
    //console.log(charactersLeft);
    answerCountText.textContent = charactersLeft + " characters left";
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
        question: form.elements["question-text"].value,
        answer: form.elements["answer-text"].value,
        tag: form.elements["tag-text"].value,
    }
    //console.log(formData);
    event.target.reset();
    questionCountText.textContent = "150 characters left";
    answerCountText.textContent = "150 characters left";

    const card = document.createElement("section");
    card.classList.add("card");

    const bookmark = document.createElement("img");
    bookmark.classList.add("card__bookmark");
    bookmark.src = "./assets/bookmark.svg";
    
    const h2 = document.createElement("h2");
    h2.classList.add("card__question");
    h2.textContent = formData.question

    const p = document.createElement("p");
    p.classList.add("card__answer");
    p.textContent = formData.answer;

    const button = document.createElement("button");
    button.classList.add("card__answer-button");
    button.textContent = "Hide answer"

    const div = document.createElement("div");
    div.classList.add("card__tags");
    
    const span = document.createElement("span");
    span.classList.add("card__tag");
    span.textContent = formData.tag;

    card.append(bookmark);
    card.append(h2);
    card.append(p);
    card.append(button);
    card.append(div);
    div.append(span);
    // form.append(card); //
    form.parentElement.after(card);

})

