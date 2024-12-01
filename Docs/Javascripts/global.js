const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const contactForm = document.getElementById("contactForm");
const overlay = document.getElementById("overlay");
const openContactForm = document.getElementsByClassName("openContactForm");

Array.from(openContactForm).forEach(button => {
    button.addEventListener('click', () => {
        overlay.style.display = 'block';
        contactForm.style.display = 'flex';

        setTimeout(() => {
            overlay.style.opacity = '1';
            contactForm.style.opacity = '1';
        }, 50);
    });
});

overlay.addEventListener('click', () => {
    overlay.style.opacity = '0';
    contactForm.style.opacity = '0';

    setTimeout(() => {
        overlay.style.display = 'none';
        contactForm.style.display = 'none';
    }, 500);
});