import { menu } from "./menu";
import "./style.css"

import { appendFn } from "./home"

//document selectors
const content = document.querySelector("#content");
const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");

homeBtn.addEventListener("click", appendFn)




console.log(menu)