const toggle_btn = document.querySelector('.toggle_btn');
const nav_links = document.querySelector('.nav_links');
let menuOpen = false;

toggle_btn.addEventListener('click', () => {
    if (menuOpen == false) {
        nav_links.style.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        nav_links.style.display = "none"
        menuOpen = false;
    }
});