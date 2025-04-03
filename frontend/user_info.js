document.addEventListener("DOMContentLoaded", function () {
    let userInfoForm = document.getElementById("userInfoForm");
    if (userInfoForm) {
        userInfoForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let age = document.getElementById("age").value;
            let phone = document.getElementById("phone").value;
            let email = document.getElementById("email").value || "Not Provided";

            let uniqueID = "UID" + Math.floor(Math.random() * 1000000); // Generate a unique user ID

            // Store user info in local storage (replace with DB integration later)
            let userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
            userDetails.push({ name, age, phone, email, uniqueID });
            localStorage.setItem("userDetails", JSON.stringify(userDetails));

            alert("Details saved successfully! Your unique ID is: " + uniqueID);
            window.location.href = "login.html"; // Redirect to login page
        });
    }
});
