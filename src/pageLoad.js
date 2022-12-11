function navBarLoad(content) { // This section of code is not working. I am still working the fix.

    const contentDiv = document.querySelector("#content");

    const navBar = document.createElement('header');
    navBar.classList.add("nav-bar");

    const navBarList = document.createElement('ul')
    navBarList.classList.add('nav-links');

    const menuTab = document.createElement('li');
    menuTab.classList.add('menu', 'link');

    const homeTab = document.createElement('li');
    homeTab.classList.add('home', 'link');

    const aboutTab = document.createElement('li');
    aboutTab.classList.add('about', 'link');

    navBarList.appendChild(menuTab);
    navBarList.appendChild(homeTab);
    navBarList.appendChild(aboutTab);
    navBar.appendChild(navBarList);
    content.appendChild(navBar);

    return content;
}

export function contentLoad() {

    const contentDiv = document.querySelector("#content");

    contentDiv.innerHTML = '';

    navBarLoad;

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

export function aboutLoad() {

    const contentDiv = document.querySelector("#content");

    contentDiv.innerHTML = '';

    navBarLoad();

    const mainTitle = document.createElement('h1');
    mainTitle.innerText = "About Us";

    const mainImg = document.createElement('img');
    mainImg.src = "../images/peppers.jpg";

    const mainText = document.createElement('p');
    mainText.innerText = "We pride ourselves on quality and use the best ingredients available to us";

    contentDiv.appendChild(mainTitle);
    contentDiv.appendChild(mainImg);
    contentDiv.appendChild(mainText);
};

export function menuLoad() {

    const contentDiv = document.querySelector("#content");

    contentDiv.innerHTML = '';

    navBarLoad();

    const mainTitle = document.createElement('h1');
    mainTitle.innerText = "Here is Arcygore's Menu!";

    const mainImg = document.createElement('img');
    mainImg.src = "../images/tofutaco.jpg";

    const mainText = document.createElement('p');
    mainText.innerText = "The tofu taco is to die for!";

    contentDiv.appendChild(mainTitle);
    contentDiv.appendChild(mainImg);
    contentDiv.appendChild(mainText);
};

export function clearContent() {

    const contentDiv = document.querySelector("#content");

    contentDiv.innerHTML = '';

}
