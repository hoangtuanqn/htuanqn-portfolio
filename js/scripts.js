/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Render contact info (email/phone) via DOM instead of static HTML, so plain-text scrapers can't harvest it
    function renderContactLink(elementId, href, displayText) {
        const el = document.getElementById(elementId);
        if (!el) return;
        const link = document.createElement('a');
        link.href = href;
        link.textContent = displayText;
        el.textContent = '';
        el.appendChild(link);
    }

    renderContactLink('work-email', 'mailto:' + 'tuan' + '@' + 'mstsoftware.vn', 'tuan' + '@' + 'mstsoftware.vn');
    renderContactLink('personal-email', 'mailto:' + 'phamhoangtuanqn' + '@' + 'gmail.com', 'phamhoangtuanqn' + '@' + 'gmail.com');
    renderContactLink('personal-phone', 'tel:' + '+84812665001', '0812 665 001');

});
