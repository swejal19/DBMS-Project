document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from submitting

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            // Store user in local storage for now (replace with DB integration later)
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ email, password });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Account created successfully! Please provide your details.");
            window.location.href = "user_info.html"; 
        });
    }
});
