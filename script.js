const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.onclick = function(){
    nav.classList.toggle("active");
}