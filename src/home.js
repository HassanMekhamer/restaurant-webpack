// 


// <h3>Abo Shahd</h3>
// <p>Having a warm drink at any given moment is a privelege that we think everyone deserves. we don't do marketing and we don't want you to buy something you don't need. in addition to your drink you will see how a community can be built on just existing together and sharing the same space. not about your money or our establishment.</p>

// <h3>3am Ibrahim</h3>
// <p>He might be the only one with the complete local knowledge of the area. having been here for more than 30 years, working, engaging and observing people and animals. seeing him sitting there playing with a cat or just exchanging greeting with everyone creates a feeling of safety and community</p>

// <h3>Om Fares</h3>
// <p>Being black in this middeterranian city is not an easy task espicially as a female and a dog. with kids showing their horrible behaviour and adults trying to prove their supremacy, Om Fares struggles to keep calm in this sea of immature assholes. being a mom also adds to the challenge. maintaing this kind of life is hard and she could be the only one able to do it.</p>


const headerArr = [
    "Abo Shahd", "3am Ibrahim", "Om Fares"
]

const paraArr = [
    "Having a warm drink at any given moment is a privelege that we think everyone deserves. we don't do marketing and we don't want you to buy something you don't need. in addition to your drink you will see how a community can be built on just existing together and sharing the same space. not about your money or our establishment."
    ,
    "He might be the only one with the complete local knowledge of the area. having been here for more than 30 years, working, engaging and observing people and animals. seeing him sitting there playing with a cat or just exchanging greeting with everyone creates a feeling of safety and community"
    ,
    "Being black in this middeterranian city is not an easy task espicially as a female and a dog. with kids showing their horrible behaviour and adults trying to prove their supremacy, Om Fares struggles to keep calm in this sea of immature assholes. being a mom also adds to the challenge. maintaing this kind of life is hard and she could be the only one able to do it."

]

const content = document.querySelector("#content")

export function appendFn(target) {
    for (let i = 0; i < 3; i++) {

const header = document.createElement("h3");
const para = document.createElement("p");
        header.textContent = headerArr[i]
        para.textContent = paraArr[i]
        content.appendChild(header)
        content.appendChild(para)

    }
}