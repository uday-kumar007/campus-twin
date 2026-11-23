
/* CAMPUS TWIN - JAVASCRIPT */

// CLASSROOM SEARCH

function filterRooms() {
    let input = document.getElementById("roomSearch");
    let filter = input.value.toUpperCase();

    let table = document.getElementById("roomTable");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let room = rows[i].getElementsByTagName("td")[0];

        if (room) {
            let text = room.textContent || room.innerText;

            rows[i].style.display =
                text.toUpperCase().includes(filter) ? "" : "none";
        }
    }
}


// MAINTENANCE FORM

let maintenanceForm =
    document.getElementById("maintenanceForm");

if (maintenanceForm) {

    maintenanceForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let problem =
            document.getElementById("problem").value;

        let location =
            document.getElementById("location").value;

        let priority =
            document.getElementById("priority").value;

        let table =
            document.getElementById("maintenanceTable");

        let newRow = table.insertRow(-1);

        newRow.innerHTML = `
            <td></td>
            <td></td>
            <td></td>
            <td class="ticket-status">Pending</td>
            <td>
                <button onclick="updateTicket(this)">
                    Resolve
                </button>
            </td>
        `;

        newRow.cells[0].textContent = problem;
        newRow.cells[1].textContent = location;
        newRow.cells[2].textContent = priority;

        updateCounters();

        maintenanceForm.reset();

        alert("Maintenance complaint submitted successfully!");

    });

}


// RESOLVE MAINTENANCE TICKET

function updateTicket(button) {

    let row = button.parentElement.parentElement;

    let status = row.querySelector(".ticket-status");

    if (status && status.textContent === "Pending") {

        status.textContent = "Resolved";

        button.textContent = "Completed";

        button.disabled = true;

        updateCounters();

        alert("Maintenance issue resolved successfully!");

    }

}


// UPDATE MAINTENANCE COUNTERS

function updateCounters() {

    let table = document.getElementById("maintenanceTable");

    if (!table) return;

    let rows = table.querySelectorAll("tr");

    let total = 0;
    let pending = 0;
    let resolved = 0;

    rows.forEach(function(row, index) {

        if (index === 0) return;

        total++;

        let status = row.querySelector(".ticket-status");

        if (status) {

            if (status.textContent.trim() === "Pending") {
                pending++;
            }

            if (status.textContent.trim() === "Resolved") {
                resolved++;
            }

        }

    });

    document.getElementById("totalTickets").textContent = total;

    document.getElementById("pendingTickets").textContent = pending;

    document.getElementById("resolvedTickets").textContent = resolved;

}


// DEMO DASHBOARD NOTIFICATION

function showCampusAlert(message) {
    alert("CAMPUS TWIN ALERT\n\n" + message);
}
