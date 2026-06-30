function showLogin() {
    document.getElementById("login").scrollIntoView({
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {

    const loginButton = document.querySelector(".login-box .primary");

    if (loginButton) {
        loginButton.addEventListener("click", function () {

            const email = document.querySelector('input[type="email"]').value;
            const password = document.querySelector('input[type="password"]').value;

            if (email === "" || password === "") {
                alert("Please enter your email and password.");
            } else {
                alert("Welcome to Elevora AI! Login system coming soon.");
            }

        });
    }

});
