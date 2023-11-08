const wrapper = document.querySelector(".wrapper");
const registerlink = document.querySelector(".register-link");
const sign = document.querySelector(".sign");
const loginlink = document.querySelector(".login-link");
const forgotPasswordLink = document.querySelector(".forgot a");

wrapper.classList.remove('active');

// Functions:-
registerlink.onclick = () => {
    wrapper.classList.add('active'); // Show the registration form
}

sign.onclick = () => {
    wrapper.classList.add('active'); // Show the registration form
}

loginlink.onclick = () => {
    wrapper.classList.remove('active'); // Hide the registration form, show the login form
}

forgotPasswordLink.onclick = () => {
    wrapper.classList.add('active'); // Show the registration form
}


document.addEventListener("DOMContentLoaded", () => {
    let themeToggle = document.getElementById("theme-toggle");
    let moonIcon = document.getElementById("moon");
    let sunIcon = document.getElementById("sun");

    moonIcon.style.display = "none"; // Hide moon icon initially, since you start with sun icon

    themeToggle.onclick = () => {
        // Toggle the display of sun and moon icons
        moonIcon.style.display = moonIcon.style.display === "none" ? "inline-block" : "none";
        sunIcon.style.display = sunIcon.style.display === "none" ? "inline-block" : "none";

        // Toggle the dark theme
        document.body.classList.toggle("dark-theme");
    };
});

//  Code By - DATTA KALE 
