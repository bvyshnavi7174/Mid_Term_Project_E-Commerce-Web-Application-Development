document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    setInterval(updateTime, 1000);

    const userPhoto = document.getElementById('user-photo');
    if (userPhoto) {
        userPhoto.addEventListener('click', function() {
            const logoutMenu = document.getElementById('logout');
            if (logoutMenu) {
                logoutMenu.style.display = logoutMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    } else {
        console.log("User photo element not found");
    }
});

function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString();
    } else {
        console.error("Element with ID 'time' not found");
    }
}

function handleClick(item) {
    if (item === 'item5') {
        window.location.href = 'http://127.0.0.1:5501/assets/structure_html/main_screen.html';
    } else if (item === 'item6') {
        // Show add product form when clicking "Add new product"
        showAddProductForm();
    }
    // Handle other items if needed
}

function showAddProductForm() {
    const form = document.getElementById('addProductForm');
    if (form) {
        form.style.display = 'flex';
    }
}

function closeAddProductForm() {
    const form = document.getElementById('addProductForm');
    if (form) {
        form.style.display = 'none';
    }
}

// Handle product form submission
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productName = document.getElementById('productName').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
    const category = document.getElementById('category').value;

    // Send form data to the server
    fetch('http://127.0.0.1:5000/products/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: productName,
            price: price,
            image: image,
            category: category
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(`Product Added:\nName: ${data.product.name}\nPrice: ${data.product.price}\nImage: ${data.product.image}\nCategory: ${data.product.category}`);
        closeAddProductForm(); // Close the form after submission
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        const isHidden = sidebar.style.transform === 'translateX(0px)';
        sidebar.style.transform = isHidden ? 'translateX(-100%)' : 'translateX(0px)';
    }
}
