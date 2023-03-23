// For Sticky Navigation Bar 
window.addEventListener("scroll",function(){
    var sticky_nav = document.querySelector("header");
    var navcontentbtn = document.getElementById("nav-content-btn");
    sticky_nav.classList.toggle("sticky",window.scrollY>0); 
})


// Function for Open Mobile View Navigation Baar
function myFunctionOpen() {
    document.querySelector('.mobile-nav').classList.add('open-mobile-nav');
    console.log("open")
    document.getElementById("bars-btn").style.display="none"
}

// Function for Close Mobile View Navigation Baar
function myFunctionClose() {
    document.querySelector('.mobile-nav').classList.remove('open-mobile-nav');
    console.log("close")
    document.getElementById("bars-btn").style.display="block"
}
