document.addEventListener('DOMContentLoaded', function() {
    setInterval(updateTime, 1000);

    document.getElementById('user-photo').addEventListener('click', function() {
        const logoutMenu = document.getElementById('logout');
        logoutMenu.style.display = logoutMenu.style.display === 'block' ? 'none' : 'block';
    });
});

function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    timeElement.textContent = now.toLocaleTimeString();
}
//test

function handleClick(item) {
    alert('Clicked on ' + item);
}
//test 123

function logout() {
    alert('Logged out');
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isHidden = sidebar.style.transform === 'translateX(0px)';
    sidebar.style.transform = isHidden ? 'translateX(-100%)' : 'translateX(0px)';
}

document.addEventListener('DOMContentLoaded', function() {
    // Get popup box element
    const popupBox = document.getElementById('popupBox');

    // Function to open popup box
    window.openPopup = function() {
        popupBox.style.display = 'flex';
    }

    // Function to close popup box
    window.closePopup = function() {
        popupBox.style.display = 'none';
    }

    // Handle form submission
    document.getElementById('addItemForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const imgUrl = document.getElementById('imgUrl').value;
        const description = document.getElementById('description').value;
        const productName = document.getElementById('productName').value;
        const price = document.getElementById('price').value;
        const catogery = document.getElementById('catogery').value;

        // Process the form data here

        // Close the popup box after submission
        closePopup();
    });
});

