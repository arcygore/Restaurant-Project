

export function contentLoad() {

    const contentDiv = document.querySelector("#content");

    const mainTitle = document.createElement('h1');
    mainTitle.innerText = "Welcome to Arcygore's Taco Shop!";

    const mainImg = document.createElement('img');
    mainImg.src = "../images/mushrooms.jpg";

    const mainText = document.createElement('p');
    mainText.innerText = "Why yes, we do have mushroom tacos available!";

    contentDiv.appendChild(mainTitle);
    contentDiv.appendChild(mainImg);
    contentDiv.appendChild(mainText);
};

export function clearContent() {

    const contentDiv = document.querySelector("#content");

    contentDiv.innerHTML = '';

}
