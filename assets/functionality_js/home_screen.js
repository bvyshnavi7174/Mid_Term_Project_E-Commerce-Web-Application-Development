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

function addStaticItem() {
    const staticContainer = document.querySelector('.static-container');
    const newItem = document.createElement('div');
    newItem.className = 'static-item';
    newItem.textContent = 'New Static Item';
    staticContainer.appendChild(newItem);
}
