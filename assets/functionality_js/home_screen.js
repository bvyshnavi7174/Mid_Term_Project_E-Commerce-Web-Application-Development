document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    setInterval(updateTime, 1000);

    // Initialize products display
    loadProducts();

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

    // Add event listeners to your edit and delete buttons
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', handleEdit);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', handleDelete);
    });
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
        loadProducts(); // Reload products after adding new one
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

// Function to load products from the server
function loadProducts() {
    fetch('http://127.0.0.1:5000/products')
        .then(response => response.json())
        .then(products => {
            // Define category mappings
            const categoryMapping = {
                'men': 'mens',
                'women': 'womens',
                'womensWear': 'womens',
                'mensWear': 'mens',
                'kids': 'kids',
                'cosmetics': 'cosmetics',
                'footwear': 'footwear'
            };

            const categories = {
                mens: document.getElementById('mensItems'),
                womens: document.getElementById('womensItems'),
                kids: document.getElementById('kidsItems'),
                cosmetics: document.getElementById('cosmeticsItems'),
                footwear: document.getElementById('footwearItems')
            };

            // Clear existing content
            Object.values(categories).forEach(container => container.innerHTML = '');

            // Log categories and check if elements are found
            console.log('Categories:', categories);
            Object.keys(categories).forEach(key => {
                if (!categories[key]) {
                    console.warn(`Element with ID '${key}Items' not found`);
                }
            });

            // Log the products fetched
            console.log('Fetched Products:', products);

            products.forEach(product => {
                // Log each product
                console.log('Processing Product:', product);

                const productElement = document.createElement('div');
                productElement.classList.add('item');
                productElement.setAttribute('data-id', product._id); // Add product ID
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="item-image">
                    <p class="item-description">${product.name} - $${product.price}</p>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                `;

                // Normalize category name
                const categoryKey = categoryMapping[product.category] || 'unknown';
                console.log(`Appending to category: ${categoryKey}`);
                
                if (categories[categoryKey]) {
                    categories[categoryKey].appendChild(productElement);
                } else {
                    console.warn('Unknown category:', product.category);
                }
            });

            // Reattach event listeners to newly added buttons
            document.querySelectorAll('.edit-btn').forEach(button => {
                button.addEventListener('click', handleEdit);
            });
            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', handleDelete);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

function handleEdit(event) {
    const item = event.target.closest('.item');
    const id = item.getAttribute('data-id');
    
    // You might want to use a form or modal to gather updated product data
    const updatedData = {
        name: prompt('Enter new product name:'),
        price: prompt('Enter new price:'),
        image: prompt('Enter new image URL:'),
        category: prompt('Enter new category:')
    };

    fetch(`http://127.0.0.1:5000/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Product updated successfully') {
            alert('Product updated successfully');
            loadProducts(); // Reload products after update
        } else {
            alert('Error updating product');
        }
    });
}

function handleDelete(event) {
    const item = event.target.closest('.item');
    const id = item.getAttribute('data-id');

    fetch(`http://127.0.0.1:5000/products/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Product deleted successfully') {
            item.remove(); // Remove the item from the UI
            alert('Product deleted successfully');
        } else {
            alert('Error deleting product');
        }
    });
}
