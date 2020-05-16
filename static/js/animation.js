window.addEventListener('load', () => {
    document.querySelector('.hero-more-info > a').addEventListener('click', (evt) => {
        evt.preventDefault();
        const targetAnchor = evt.target.parentElement;
        const targetNode = document.querySelector(targetAnchor.getAttribute('href'));

        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: targetNode.offsetTop - 64
        });
    });
    document.getElementsByClassName('nav-menu-icon')[0].addEventListener('click', (evt) => {
        const targetIco = evt.target;
        const navOverlay = document.getElementsByClassName('nav-overlay')[0];
        const navLinkMenu = document.querySelector('.nav-overlay > .nav-link-menu');

        if(targetIco.className === 'nav-menu-icon') {
            targetIco.className = 'nav-menu-icon on';
            navOverlay.className = 'nav-overlay on';
            navLinkMenu.className = 'nav-link-menu on';
        }
        else {
            targetIco.className = 'nav-menu-icon';
            navOverlay.className = 'nav-overlay';
            navLinkMenu.className = 'nav-link-menu';
        }


    });
});