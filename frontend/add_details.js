document.addEventListener("DOMContentLoaded", function() {
    // Fetch user details (Hardcoded for now, remove this when integrating backend)
    const userDetails = {
        name: "John Doe",
        age: 25,
        phone: "9876543210",
        email: "johndoe@example.com",
        id: "USER123"
    };

    // Display user details on the page
    document.getElementById("userName").textContent = userDetails.name;
    document.getElementById("userAge").textContent = userDetails.age;
    document.getElementById("userPhone").textContent = userDetails.phone;
    document.getElementById("userEmail").textContent = userDetails.email || "N/A";
    document.getElementById("userId").textContent = userDetails.id;

    // Vaccine Table Logic
    const tableBody = document.getElementById("vaccineTableBody");

    function addRow() {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${Date.now()}</td>
            <td><input type="text" class="vaccine-name" placeholder="Enter Vaccine Name"></td>
            <td><input type="date" class="vaccine-date"></td>
            <td><input type="number" class="doses" min="0" placeholder="Doses Completed"></td>
            <td>
                <select class="status">
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </td>
            <td><button class="deleteRow">❌</button></td>
        `;
        tableBody.appendChild(row);
    }

    // Add initial row so user can input details immediately
    addRow();

    // Add row on "+" button click
    document.getElementById("addRowButton").addEventListener("click", addRow);

    // Delete row functionality
    tableBody.addEventListener("click", function(event) {
        if (event.target.classList.contains("deleteRow")) {
            event.target.closest("tr").remove();
        }
    });

    // Save Button Click - Collect and Display Data in Console (For Now)
    document.getElementById("saveButton").addEventListener("click", function() {
        const rows = document.querySelectorAll("#vaccineTableBody tr");
        let vaccineData = [];

        rows.forEach(row => {
            const cells = row.querySelectorAll("td");
            vaccineData.push({
                id: cells[0].textContent,
                vaccineName: cells[1].querySelector(".vaccine-name").value,
                date: cells[2].querySelector(".vaccine-date").value,
                dosesCompleted: cells[3].querySelector(".doses").value,
                status: cells[4].querySelector(".status").value,
                userId: userDetails.id
            });
        });

        console.log("Saved Vaccine Data:", vaccineData);
        alert("Details saved successfully (not yet stored in DB)!");
    });
});
