// For Sticky Navigation BarProp...

window.addEventListener("scroll",function(){
    var sticky_nav = document.querySelector("header");
    var navcontentbtn = document.getElementById("nav-content-btn");
    sticky_nav.classList.toggle("sticky",window.scrollY>0);
    // navcontentbtn.classList.toggle("nav-content-btn-toggle",window.scrollY>0);
    // navcontentbtn.style.backgroundColor = "red"
    // sticky_nav.style.backgroundColor = "red"
    // var navbtn = document.querySelector("nav-btn")
    // navbtn.classList.toggle("sticky-btn",window.scrollY>0);  
    // navbtn.style.background = "red"  
})
// let menubarbtn = document.querySelector("menubar-icon")
// console.log(menubarbtn);

