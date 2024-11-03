document.getElementById('checkStatus').addEventListener('click', checkUserStatus);

function checkUserStatus() {
    const username = document.getElementById('username').value;
    const dob = document.getElementById('dob').value;

    const pendingUsers = JSON.parse(localStorage.getItem('pendingUsers')) || [];
    const acceptedUsers = JSON.parse(localStorage.getItem('acceptedUsers')) || [];
    const rejectedUsers = JSON.parse(localStorage.getItem('rejectedUsers')) || [];

    // Clear the previous results
    const tbody = document.querySelector('#userStatus tbody');
    tbody.innerHTML = '';

    // Check in pending users
    const foundPending = pendingUsers.find(user => user.username === username && user.dob === dob);
    if (foundPending) {
        tbody.innerHTML += `
            <tr>
                <td>${foundPending.id}</td>
                <td>${foundPending.username}</td>
                <td>${foundPending.dob}</td>
                <td>${foundPending.bankName}</td>
                <td>Pending</td>
            </tr>
        `;
    }

    // Check in accepted users
    const foundAccepted = acceptedUsers.find(user => user.username === username && user.dob === dob);
    if (foundAccepted) {
        tbody.innerHTML += `
            <tr>
                <td>${foundAccepted.id}</td>
                <td>${foundAccepted.username}</td>
                <td>${foundAccepted.dob}</td>
                <td>${foundAccepted.bankName}</td>
                <td>Accepted</td>
            </tr>
        `;
    }

    // Check in rejected users
    const foundRejected = rejectedUsers.find(user => user.username === username && user.dob === dob);
    if (foundRejected) {
        tbody.innerHTML += `
            <tr>
                <td>${foundRejected.id}</td>
                <td>${foundRejected.username}</td>
                <td>${foundRejected.dob}</td>
                <td>${foundRejected.bankName}</td>
                <td>Rejected</td>
            </tr>
        `;
    }

    // If no user found
    if (tbody.innerHTML === '') {
        tbody.innerHTML = `<tr><td colspan="5">No user found</td></tr>`;
    }
}
