import { contentLoad , clearContent } from './pageLoad.js';

const contentDiv = document.querySelector("#content");

contentLoad();

const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', clearContent);
