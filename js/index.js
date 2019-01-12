const catEles = document.querySelectorAll(".cat")
const catEleList = [...catEles]

const catButtonEles = document.querySelectorAll(".cat_button")
const catButtonEleList = [...catButtonEles]


catButtonEleList.forEach(catButtonEle => {
    catButtonEle.addEventListener("click", () => {
        
        catEleList.forEach(catEle => {
            
            if(catButtonEle.hasAttribute("data-add")) {
                catEle.classList.add(catButtonEle.getAttribute("data-add"))
            }
            
            if(catButtonEle.hasAttribute("data-remove")) {
                catEle.classList.remove(catButtonEle.getAttribute("data-remove"))
            }
        })
    })
})
