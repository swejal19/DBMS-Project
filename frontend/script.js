// Handle Login
document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from submitting normally

            let email = document.getElementById("loginEmail").value;
            let password = document.getElementById("loginPassword").value;

            // Check login details (in a real app, you'd validate from the backend)
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let user = users.find(u => u.email === email && u.password === password);

            if (user) {
                alert("Login Successful!");
                window.location.href = "dashboard.html"; // Redirect to dashboard/homepage
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }
});
