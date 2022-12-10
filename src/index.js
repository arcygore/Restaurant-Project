import { contentLoad ,  menuLoad , aboutLoad } from './pageLoad.js';

const contentDiv = document.querySelector("#content");

contentLoad();

const menuPage = document.querySelector(".menu");

menuPage.addEventListener('click', menuLoad);

const homePage = document.querySelector(".home");

homePage.addEventListener('click', contentLoad);

const aboutPage = document.querySelector(".about");

aboutPage.addEventListener('click', aboutLoad);
