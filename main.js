// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}


// nav hide

let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(e){

    e.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


//---------- sec-6-------------
// Modal

document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})

