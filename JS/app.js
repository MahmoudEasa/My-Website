
const buttonUp = document.querySelector(".button i");

window.onscroll = (()=> {
    if (document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150) {
        buttonUp.style.display = "flex";
    } else {
        buttonUp.style.display = "none";
    }
});
