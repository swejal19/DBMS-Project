document.addEventListener("DOMContentLoaded", function () {
    // Login Form Logic
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

    // Profile Form Logic
    let profileForm = document.getElementById("profileForm");
    if (profileForm) {
        profileForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const user = {
                userId: document.getElementById("userId").value,
                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                email: document.getElementById("email").value,
                gender: document.getElementById("gender").value,
                age: document.getElementById("age").value
            };

            fetch("/api/userinfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(response => {
                if (response.ok) {
                    alert("Profile info saved successfully!");
                    window.location.href = "index.html";
                } else {
                    alert("Error saving profile info.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
        });
    }
});
