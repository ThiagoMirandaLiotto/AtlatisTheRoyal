window.addEventListener("scroll", function() {
    const nav = document.querySelector(".HEADERNAV");
    const nav2 = document.querySelector(".HEADERNAVmobile");
    const nav3 = document.querySelector(".HEADERNAVmobile2");
    const text = document.querySelectorAll(".jost-all");
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
        nav2.classList.add("scrolledMobile");
        nav3.classList.add("scrolledMobile2");
        text.forEach(text => text.classList.add("scrolled"));
    } else {
        nav.classList.remove("scrolled");
        nav2.classList.remove("scrolledMobile");
        nav3.classList.remove("scrolledMobile2");
        text.forEach(text => text.classList.remove("scrolled"));
    }
});
