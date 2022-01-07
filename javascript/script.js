
/*event listner to display nav for mobile view*/
let topIcon = document.querySelector(".top-icons");
topIcon.addEventListener("click", () => {

    let menu = document.querySelector(".main-menu");
    let nav = document.querySelector(".topnav");
    let header = document.querySelector("header");
    let menuBtn = document.querySelector("#menu-btn");
    let closeBtn = document.querySelector(".close-btn");

    if (menu.className === "main-menu"){
        menu.className += " responsive"; 
        nav.className += " nav-display";
        header.className += " header-adj";
        menuBtn.className += " inactive"
        closeBtn.className += " responsive";
    }

    else{
        menu.className = "main-menu";
        nav.className = "topnav";
        header.className = "";
        menuBtn.className = "";
        closeBtn.className = "close-btn";
    }
}
)

function storePagePosition() {
    var page_y = window.pageYOffset;
    localStorage.setItem("page_y", page_y);
  }