const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);

    paintGreeting();
}

function onLogoutSubmit(event) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY, loginInput.value);
    greeting.classList.add(HIDDEN_CLASSNAME);
}

function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    const button = document.createElement("button");
    button.innerText = "Log out";
    button.classList.add("logout_button");
    greeting.appendChild(button);

    button.addEventListener("click", onLogoutSubmit)
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);

} else {
    //show the greeting
    paintGreeting();
} 

