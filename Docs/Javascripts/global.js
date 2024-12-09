const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


const contactForm = document.getElementById("contactForm");
const notify = document.getElementById("notify");
const overlay = document.getElementById("overlay");
const overlayMenu = document.getElementById("overlayMenu");
const openContactForm = document.getElementsByClassName("openContactForm");
const openMenuForm = document.getElementsByClassName("openMenuForm");
const menuForm = document.getElementById("menuForm");
const closeMenu = document.getElementById("closeMenu");

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

Array.from(openMenuForm).forEach(button => {
    button.addEventListener('click', () => {
        overlayMenu.style.display = 'block';
        menuForm.style.display = 'flex';

        setTimeout(() => {
            overlayMenu.style.opacity = '1';
            menuForm.style.opacity = '1';
        }, 50);
    });
});

overlayMenu.addEventListener('click', () => {
    overlayMenu.style.opacity = '0';
    menuForm.style.opacity = '0';

    setTimeout(() => {
        overlayMenu.style.display = 'none';
        menuForm.style.display = 'none';
    }, 500);
});
closeMenu.addEventListener('click', () => {
    overlayMenu.style.opacity = '0';
    menuForm.style.opacity = '0';

    setTimeout(() => {
        overlayMenu.style.display = 'none';
        menuForm.style.display = 'none';
    }, 500);
});

let dismissed = false; 

window.addEventListener("scroll", () => {
    if (dismissed) return; 

    if (window.scrollY > 400) {
        notify.style.display = "block";
        notify.style.opacity = "1";
    } else {
        notify.style.opacity = "0";
        setTimeout(() => {
            notify.style.display = "none";
        }, 500);
    }
});

document.addEventListener("click", (event) => {
    if (!notify.contains(event.target)) {
        notify.style.opacity = "0";
        setTimeout(() => {
            notify.style.display = "none";
        }, 500);
        dismissed = true;
    }
});