/*
    Toggle between adding and removing the "hidden" class to responsive
*/
function toggleNav() {
    if(isMobile){
        var x = document.getElementById("mobileHideMe");
        if (x.className === "responsive") {
            x.className += " hidden";
        } else {
            x.className = "responsive";
        }
    }
}

/*
    Toggle if mobile
*/
window.onload = function() {
    if(isMobile){
        console.log("done");
        var x = document.getElementById("mobileHideMe");
        if (x.className === "responsive") {
            x.className += " hidden";
        } else {
            x.className = "responsive";
        }
    }
}

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
