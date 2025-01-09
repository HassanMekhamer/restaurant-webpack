const contentArr = [
    {
        name: "Abo Shahd",
        biography: "Having a warm drink at any given moment is a privelege that we think everyone deserves. we don't do marketing and we don't want you to buy something you don't need. in addition to your drink you will see how a community can be built on just existing together and sharing the same space. not about your money or our establishment."
    },
    {
        name: "3am Ibrahim",
        biography: "He might be the only one with the complete local knowledge of the area. having been here for more than 30 years, working, engaging and observing people and animals. seeing him sitting there playing with a cat or just exchanging greeting with everyone creates a feeling of safety and community"
    },
    {
        name: "Om Fares",
        biography: "Being black in this middeterranian city is not an easy task espicially as a female and a dog. with kids showing their horrible behaviour and adults trying to prove their supremacy, Om Fares struggles to keep calm in this sea of immature assholes. being a mom also adds to the challenge. maintaing this kind of life is hard and she could be the only one able to do it."
    },
]

const content = document.querySelector("#content")

export function appendHome(target) {
    content.innerHTML = ""

    for (let i = 0; i < contentArr.length; i++) {

        const header = document.createElement("h3");
        const para = document.createElement("p");
        header.textContent = contentArr[i].name
        para.textContent = contentArr[i].biography
        content.appendChild(header)
        content.appendChild(para)

    }
}