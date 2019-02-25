//variales

let nav = document.getElementById('nav');
console.log(nav);
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;
let reload = document.getElementById('onload');

function menus() {
    let desplazamiento_actual = window.pageYOffset;
    if (desplazamiento_actual <= 100) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = 'white';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = 'black';


    }
}

function apertura() {
    if (cerrado) {
        menu.style.width = '70%';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}
window.addEventListener('load', function() {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('click', function(e) {
    if (cerrado == false) {
        let span = document.querySelector('span');

        if (e.target !== span && e.target !== abrir) {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
window.addEventListener('scroll', function() {
    menus();
});
window.addEventListener('resize', function() {

    if (this.screen.width >= 800) {

        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click', function() {
    apertura();
});