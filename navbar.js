const navBar = document.getElementById("navbar");

function pageLoad() {
    //navBar.style.display = "none";
}

function toggle_menu() {
    //window.alert("sometext");
    if (navBar.style.display === "flex") {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "flex";
    }
}
