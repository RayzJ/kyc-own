// Fetch and display pending users from local storage
function displayPendingUsers() {
    const tbody = document.querySelector('#pendingUsers tbody');
    tbody.innerHTML = ''; // Clear existing rows

    // Get pending users from localStorage
    const pendingUsers = JSON.parse(localStorage.getItem('pendingUsers')) || [];

    // Populate the table with pending users
    pendingUsers.forEach(user => {
        tbody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.dob}</td>
                <td>${user.bankName}</td>
                <td>
                    <button onclick="acceptUser(${user.id})">Accept</button>
                    <button onclick="rejectUser(${user.id})">Reject</button>
                </td>
            </tr>
        `;
    });
}

// Accept user function
function acceptUser(id) {
    let pendingUsers = JSON.parse(localStorage.getItem('pendingUsers')) || [];
    const user = pendingUsers.find(user => user.id === id);
    if (user) {
        let acceptedUsers = JSON.parse(localStorage.getItem('acceptedUsers')) || [];
        acceptedUsers.push(user);
        localStorage.setItem('acceptedUsers', JSON.stringify(acceptedUsers));
        pendingUsers = pendingUsers.filter(user => user.id !== id);
        localStorage.setItem('pendingUsers', JSON.stringify(pendingUsers));
        alert(`User with ID ${id} has been accepted.`);
        displayPendingUsers();
    }
}

// Reject user function
function rejectUser(id) {
    let pendingUsers = JSON.parse(localStorage.getItem('pendingUsers')) || [];
    const user = pendingUsers.find(user => user.id === id);
    if (user) {
        let rejectedUsers = JSON.parse(localStorage.getItem('rejectedUsers')) || [];
        rejectedUsers.push(user);
        localStorage.setItem('rejectedUsers', JSON.stringify(rejectedUsers));
        pendingUsers = pendingUsers.filter(user => user.id !== id);
        localStorage.setItem('pendingUsers', JSON.stringify(pendingUsers));
        alert(`User with ID ${id} has been rejected.`);
        displayPendingUsers();
    }
}


// Call the function to display users on page load
document.addEventListener('DOMContentLoaded', displayPendingUsers);
