const navMenu = document.querySelector('.menu');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = navMenu.getAttribute('show');
    
    if (visibility === 'false') {
        navMenu.setAttribute('show', 'true');
        navToggle.getElementsByTagName('img')[0].src = '../../assets/close.png';
    } else {
        navMenu.setAttribute('show', 'false');
        navToggle.getElementsByTagName('img')[0].src = '../../assets/bars-solid.png';
    }
});