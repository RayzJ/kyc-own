let users = [];
let userId = 1;

document.getElementById('registerBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const dob = document.getElementById('dob').value;
    
    if (username && dob) {
        const bankName = "Bank 1"; // Change to "Bank 2" in bank2.js
        users.push({ id: userId++, username, dob, bankName });
        document.getElementById('username').value = '';
        document.getElementById('dob').value = '';
    } else {
        alert("Please fill in all fields");
    }
});

document.getElementById('checkUserBtn').addEventListener('click', () => {
    const userListDiv = document.getElementById('userList');
    userListDiv.innerHTML = '';

    users.forEach(user => {
        userListDiv.innerHTML += `
            <div>
                <span>ID: ${user.id}, Name: ${user.username}, DOB: ${user.dob}, Bank: ${user.bankName}</span>
                <button onclick="moveToPending(${user.id})">Move to Pending</button>
            </div>
        `;
    });
});

function moveToPending(id) {
    const user = users.find(user => user.id === id);
    if (user) {
        // Store user details in localStorage
        let pendingUsers = JSON.parse(localStorage.getItem('pendingUsers')) || [];
        pendingUsers.push(user); // Add user to pending users array
        localStorage.setItem('pendingUsers', JSON.stringify(pendingUsers)); // Save back to localStorage

        // Remove the user from the current list (optional)
        users = users.filter(u => u.id !== id);
        alert(`User with ID ${id} has been moved to pending.`);
    }
}
