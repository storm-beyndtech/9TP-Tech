var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
loader.style.display = "none";
})


var navH1 = document.getElementById('navh1');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        navH1.style.display = "none";
    } 
    else {
        navH1.style.display = "block";
    }
};
