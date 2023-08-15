
// Accessing the elements:-
const wrapper = document.querySelector(".wrapper");
const registerlink = document.querySelector(".register-link");
const loginlink = document.querySelector(".login-link");
const forgotPasswordLink = document.querySelector(".forgot a");

// functions:-
registerlink.onclick = () => {
    wrapper.classList.add('active');
}

loginlink.onclick = () => {
    wrapper.classList.remove('active');
}

forgotPasswordLink.onclick = () => {
    wrapper.classList.add('active');
}


/* 15-08-2023 */
/* --------------------- END ------------------------ */

