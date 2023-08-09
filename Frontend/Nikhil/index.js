
// ------------------------------ Menu - Icon ---------------------------------------

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {    // onclick function for menu icons(3 lines) this is arrow function
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {     // when the user scrolls the page on the window then this function inside the arrow will be executed
    sections.forEach(sec => {    // it assumes that inside the array there are many sections and it accesses one by one each section
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // ----------------------------- sticky navbar -------------------------------
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ------------------------------ Remove Menu - Icon and navbar when clicked/Scroll---------------------------------------
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ------------------------------ Scroll Reveal(Animation) ---------------------------------------
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1800,
    delay: 110
});

ScrollReveal().reveal('.home-content, .heading , .heading1,.home .home-image img', { origin: 'top' });
ScrollReveal().reveal('.contact form ,.achivements-box ,.achivements-content .content h1 ,.social-media i, .btn, .about-img img', { origin: 'bottom' });
ScrollReveal().reveal('.ed1 ,.ed2,.social-icons a,.home-content h1 , .about .about-img img', { origin: 'left' });

// ------------------------------ multiple-text ---------------------------------------
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Programmer', 'Explorer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 800,
    loop: true
});


// CODE BY - DATTA KALE

//  -------------------------------------- END ---------------------------------------
