const cerrar = document.getElementById('cerrar');
const menu = document.getElementById('menu');

const links = document.getElementById('links');

menu.addEventListener('click', () => {
    links.style.display = 'flex';
    cerrar.style.display = 'flex';
    cerrar.addEventListener('click', () => {
        links.style.display = 'none';
        cerrar.style.display = 'none';
    });
});
