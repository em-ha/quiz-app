console.clear();

const form = document.querySelector('[data-js="form"]');


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
        question: form.elements["question-text"].value,
        answer: form.elements["answer-text"].value,
        tag: form.elements["tag-text"].value,
    }
    console.log(formData);
    event.target.reset();

    const card = document.createElement("section");
    card.classList.add("card");
    
    const h2 = document.createElement("h2");
    h2.classList.add("card__question");
    h2.textContent = formData.question

    const p = document.createElement("p");
    p.classList.add("card__answer");
    p.textContent = formData.answer;

    const button = document.createElement("button");
    button.classList.add("card__answer-button");
    button.textContent = formData.tag;

    card.append(h2);
    card.append(p);
    card.append(button);
    form.append(card);

})

