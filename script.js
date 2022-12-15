const app = {};

app.init = function () {
    app.menu();
    app.noMenu();
}

// SLIDE OUT MENU

// grab the elements 
app.menuOpen = document.querySelector('#menuOpen');
app.menuClose = document.querySelector('#menuClose');
app.mobileMenu = document.querySelector('.slideOutMenu');

// open menu
app.menu = function () {
    app.menuOpen.addEventListener('click', () => {
        app.mobileMenu.classList.add('open');
    })
}

// close menu
app.noMenu = function () {
    app.menuClose.addEventListener('click', () => {
        app.mobileMenu.classList.remove('open');
    });
    
}
app.init();