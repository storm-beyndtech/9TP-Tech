var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
loader.style.display = "none";
})


if (window.location.protocol != "https:") {
window.location.protocol = "https:";
}

