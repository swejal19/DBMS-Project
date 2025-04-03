document.addEventListener("DOMContentLoaded", function() {
    // Hardcoded user details (Replace this with DB fetching logic)
    const userDetails = {
        name: "John Doe",
        age: 25,
        phone: "9876543210",
        email: "johndoe@example.com",
        id: "USER123"
    };

    // Display user details
    document.getElementById("userName").textContent = userDetails.name;
    document.getElementById("userAge").textContent = userDetails.age;
    document.getElementById("userPhone").textContent = userDetails.phone;
    document.getElementById("userEmail").textContent = userDetails.email || "N/A";
    document.getElementById("userId").textContent = userDetails.id;

    // Fetch Vaccine Data from Backend (Simulated Here)
    function fetchVaccineData() {
        // Simulated backend response (Replace this with actual DB API call)
        const vaccineData = [
            { id: "001", vaccineName: "Covaxin", date: "2024-03-15", doses: 2, status: "Completed" },
            { id: "002", vaccineName: "Covishield", date: "2023-11-10", doses: 1, status: "Pending" }
        ];

        const tableBody = document.querySelector("#vaccineReport tbody");
        tableBody.innerHTML = ""; // Clear previous data

        vaccineData.forEach(entry => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${entry.id}</td>
                <td>${entry.vaccineName}</td>
                <td>${entry.date}</td>
                <td>${entry.doses}</td>
                <td>${entry.status}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    fetchVaccineData(); // Call function to populate table

    // Print Report Functionality
    document.getElementById("printReport").addEventListener("click", function() {
        window.print();
    });
});
