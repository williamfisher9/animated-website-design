const barsIcon = document.querySelector(".bars-icon");
const collapsableNavbar = document.querySelector(".collapsable-navbar-wrapper");

barsIcon.addEventListener("click", () => {
    if(collapsableNavbar.getBoundingClientRect().top > 0){
        collapsableNavbar.style.transform = "translateY(-100px)";
    } else {
        collapsableNavbar.style.transform = "translateY(200px)";
    }
})