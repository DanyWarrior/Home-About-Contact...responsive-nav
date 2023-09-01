

const hamburger = document.querySelector(".hamburger")
const headerNav = document.querySelector(".header-nav")
const navLinks = document.querySelectorAll(".navLinks")


hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    headerNav.classList.toggle("active")
})




navLinks.forEach( element =>{
    element.addEventListener("click", ()=>{
        hamburger.classList.remove("active")
        headerNav.classList.remove("active")
    })
})