function navBarLoad(content) { // Loads the Navigation Bar at the top of the page.

    const contentDiv = document.querySelector("#content");

    const navBar = document.createElement('header');
    navBar.classList.add("nav-bar");

    const navBarList = document.createElement('ul')
    navBarList.classList.add('nav-links');

    const menuTab = document.createElement('li');
    menuTab.classList.add('menu', 'link');
    menuTab.innerText = "Menu";

    const homeTab = document.createElement('li');
    homeTab.classList.add('home', 'link');
    homeTab.innerText = "Home";

    const aboutTab = document.createElement('li');
    aboutTab.classList.add('about', 'link');
    aboutTab.innerText = "About";

    navBarList.appendChild(menuTab);
    navBarList.appendChild(homeTab);
    navBarList.appendChild(aboutTab);
    navBar.appendChild(navBarList);
    content.appendChild(navBar);

}

function pageEventListener() {
    const menuPage = document.querySelector(".menu");

    menuPage.addEventListener('click', menuLoad);

    const homePage = document.querySelector(".home");

    homePage.addEventListener('click', contentLoad);

    const aboutPage = document.querySelector(".about");

    aboutPage.addEventListener('click', aboutLoad);

}

export function contentLoad() {

    const contentDiv = document.querySelector("#content");

    contentDiv.innerHTML = '';

    // const navBar = document.createElement('header');
    // navBar.classList.add("nav-bar");
    // contentDiv.appendChild(navBar);

    // const navBarList = document.createElement('ul')
    // navBarList.classList.add('nav-links');

    // const menuTab = document.createElement('li');
    // menuTab.classList.add('menu', 'link');
    // menuTab.innerText = "Menu";

    // const homeTab = document.createElement('li');
    // homeTab.classList.add('home', 'link');
    // homeTab.innerText = "Home";

    // const aboutTab = document.createElement('li');
    // aboutTab.classList.add('about', 'link');
    // aboutTab.innerText = "About";

    // navBarList.appendChild(menuTab);
    // navBarList.appendChild(homeTab);
    // navBarList.appendChild(aboutTab);
    // navBar.appendChild(navBarList);
    // contentDiv.appendChild(navBar);

    navBarLoad(contentDiv);

    const mainTitle = document.createElement('h1');
    mainTitle.innerText = "Welcome to Arcygore's Taco Shop!";

    const mainImg = document.createElement('img');
    mainImg.src = "../images/mushrooms.jpg";

    const mainText = document.createElement('p');
    mainText.innerText = "Why yes, we do have mushroom tacos available!";

    contentDiv.appendChild(mainTitle);
    contentDiv.appendChild(mainImg);
    contentDiv.appendChild(mainText);

    pageEventListener();
};

let menuList = [{
    "itemimgsrc": "../images/streettaco.jpg",
    "itemname": "Street Taco",
    "itemprice": 10.99,
    "itemdescription": "Traditional Mexican street taco with your choice of chocolate, vanilla, or strawberry!"
},{
    "itemimgsrc": "../images/streettaco.jpg",
    "itemname": "Street Taco",
    "itemprice": 10.99,
    "itemdescription": "Traditional Mexican street taco with your choice of chocolate, vanilla, or strawberry!"
}
]

function createMenu(menuList, menuLocation) {
    let i=1;
    menuList.forEach(function(item) {
        console.log(item);
        const menuItem = document.createElement("div");
        menuItem.classList.add('menu-item', `menu-item${i}`);
    
        const itemImg = document.createElement('img');
        itemImg.classList.add('food-img');
        itemImg.src = item.itemimgsrc;

        const foodItemAndPrice = document.createElement('h2');
        foodItemAndPrice.innerText = `${item.itemname} - $${item.itemprice}`;
        console.log(foodItemAndPrice);

        const mainText = document.createElement('p');
        mainText.innerText = `${item.itemdescription}`;

        menuItem.appendChild(itemImg);
        menuItem.appendChild(foodItemAndPrice);
        menuItem.appendChild(mainText);
        
        menuLocation.appendChild(menuItem);
        i++;
    });
}

export function aboutLoad() {

    const contentDiv = document.querySelector("#content");

    contentDiv.innerHTML = '';

    navBarLoad(contentDiv);

    const mainTitle = document.createElement('h1');
    mainTitle.innerText = "About Us";

    const mainImg = document.createElement('img');
    mainImg.src = "../images/peppers.jpg";

    const mainText = document.createElement('p');
    mainText.innerText = "We pride ourselves on quality and use the best ingredients available to us";

    contentDiv.appendChild(mainTitle);
    contentDiv.appendChild(mainImg);
    contentDiv.appendChild(mainText);
    pageEventListener();
};

export function menuLoad() {

    const contentDiv = document.querySelector("#content");

    contentDiv.innerHTML = '';

    navBarLoad(contentDiv);

    const mainTitle = document.createElement('h1');
    mainTitle.innerText = "Here is Arcygore's Menu!";


    const menuDiv = document.createElement("div");
    menuDiv.classList.add('menu-container');


    // const menuItem = document.createElement("div");
    // menuItem.classList.add('menu-item');

    // const mainImg = document.createElement('img');
    // mainImg.src = "../images/tofutaco.jpg";

    // const mainText = document.createElement('p');
    // mainText.innerText = "The tofu taco is to die for!";
    createMenu(menuList, menuDiv);
    contentDiv.appendChild(menuDiv);
    pageEventListener();
};

export function clearContent() {

    const contentDiv = document.querySelector("#content");

    contentDiv.innerHTML = '';
    pageEventListener();

}
