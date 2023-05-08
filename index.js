let hamburger= document.querySelector(".hamburger")
let nav_menu= document.querySelector(".nav-link")
let list= document.querySelectorAll("li")

hamburger.addEventListener("click", show)



function show(){
    nav_menu.classList.toggle("real")
    list.forEach(nav=>{
        nav.addEventListener("click", ()=>{
            nav_menu.classList.remove("real")
        })
    })
}