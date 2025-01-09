const contentArr = [
    { 
        group: "habayza",
        bio: "a stable group of three people sitting with dogs and cats and any other animal that would allow them to share the space. plating card games and consistently doing frugs."
    },
    {
        group: "Zico and co",
        bio: "having multiple mutuals between us we have been in visible and invisible contact for as long as we knew and didn't know."
    },
    {
        group: "dancers",
        bio: "just a chill group of random people, some are egyptians and some are sudanese and maybe even more. with little contact and few names to recall they are still a nice group to see around."
    },
    {
        group: "statue people",
        bio: "They might be annoying at time but the devil you know, you know?!. with multiple activities starting from selling drugs and extending to what comes with it. they are still a main element of the ecosystem"
    }
]


const content = document.querySelector("#content")

export function appendAbout(target) {
    content.innerHTML = ""

    for (let i = 0; i < contentArr.length; i++) {

        const header = document.createElement("h3");
        const para = document.createElement("p");
        header.textContent = contentArr[i].group
        para.textContent = contentArr[i].bio
        content.appendChild(header)
        content.appendChild(para)

    }
}