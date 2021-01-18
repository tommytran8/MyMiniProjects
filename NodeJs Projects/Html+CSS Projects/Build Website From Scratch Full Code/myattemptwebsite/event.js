const menu = document.querySelector('menu');
const lines = document.querySelector('#lines-group');

lines.addEventListener('click', ()=>{
    menu.classList.toggle("open");
    (document.querySelectorAll('.lines')).forEach(element => {
        element.classList.toggle("open");
    });

});
