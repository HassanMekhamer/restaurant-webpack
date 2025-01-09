import "./style.css"

import { appendHome } from "./home"
import { appendMenu } from "./menu"

//document selectors
const content = document.querySelector("#content");
const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");

appendHome()

homeBtn.addEventListener("click", appendHome)
menuBtn.addEventListener("click", appendMenu)





console.log(menu)