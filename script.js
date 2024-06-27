const barsIcon = document.querySelector(".bars-icon");
const collapsableNavbar = document.querySelector(".collapsable-navbar-wrapper");
const info_el = document.querySelector(".info");

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const contin = document.getElementById("contin");

const runnerImg = document.getElementById("runner-img");

barsIcon.addEventListener("click", () => {
    if(collapsableNavbar.getBoundingClientRect().top > 0){
        collapsableNavbar.style.transform = "translateY(-100px)";
    } else {
        collapsableNavbar.style.transform = "translateY(290px)";
    }
})

window.addEventListener("load", () => {
    if(window.innerWidth >= 1100){
        title.style.bottom = "85%";
        desc.style.bottom = "65%";
        contin.style.bottom = "50%";

        title.style.opacity = "1";
        desc.style.opacity = "1";
        contin.style.opacity = "1";

        runnerImg.style.transform = "translateX(-800px)";

        runnerImg.style.opacity = "1";

        runnerImg.style.scale = "1";
    } else if(window.innerWidth <= 428){
        runnerImg.style.transform = "translateY(-300px)";
        runnerImg.style.scale = "1";

        info_el.style.bottom = 0;
    }
})