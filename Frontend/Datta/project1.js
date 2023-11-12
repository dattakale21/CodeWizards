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


//  Code By - DATTA KALE 
