const content = document.querySelector("#content")


const contentArr = [
    { name: "Chai", description: "you don;t need an explanation on what chai can offer you at any given moment" }
    ,
    { name: "Break 3x1", description: "If you are a caffiene enthusiast without the caffiene this could he a great option" }
    ,
    { name: "Mint", description: "You should always consoider mint" }
    ,
    { name: "Hibiscus", description: "One time we had some hibiscus from Aswana and everybody tried it" }
    ,
]




export function appendMenu(target) {
    content.innerHTML = ""

    for (let i = 0; i < contentArr.length; i++) {
        const header = document.createElement("h3");
        const para = document.createElement("p");
        header.textContent = contentArr[i].name
        para.textContent = contentArr[i].description
        content.appendChild(header)
        content.appendChild(para)

    }
}