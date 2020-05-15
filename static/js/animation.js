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
});