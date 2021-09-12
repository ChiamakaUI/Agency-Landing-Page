let mobileMenuButton = document.getElementById("get_menu");
let mobileMenu = document.getElementById("mobile_menu");

mobileMenuButton.addEventListener("click", displayMobileMenu, { once: true });

function displayMobileMenu(e) {
    e.preventDefault();

    let menu = document.createElement("ul");
    let menuItem1 = document.createElement("li");
    let menuItemText1 = document.createTextNode("About");
    let menuItem2 = document.createElement("li");
    let menuItemText2 = document.createTextNode("Services");
    let menuItem3 = document.createElement("li");
    let menuItemText3 = document.createTextNode("Projects");
    let btn = document.createElement('button')
    btn.innerHTML = 'Contact'


    menuItem1.appendChild(menuItemText1);
    menuItem2.appendChild(menuItemText2);
    menuItem3.appendChild(menuItemText3);

    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);
    menu.appendChild(btn);

    menu.classList.add("mobileMenuList");


    mobileMenu.appendChild(menu);
}
