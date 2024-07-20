// Handle Sign In Button Click
document.getElementById('signin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
    window.scrollTo({ top: document.getElementById('login-form').offsetTop, behavior: 'smooth' });
});

// Handle Sign Up Button Click
document.getElementById('signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    window.scrollTo({ top: document.getElementById('register-form').offsetTop, behavior: 'smooth' });
});

// Handle Login Form Submission
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:5000/auth/login', { // Ensure this URL is correct
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Login response:', data);
        if (data.message === 'Login successful') {
            alert('Login successful! Navigating to the home screen...');
            localStorage.setItem('userId', data.userId);
            window.location.href = '../structure_html/home_screen.html';
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


// Handle Register Form Submission
document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const email = document.getElementById('email').value;

    fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Register response:', data);
        if (data.message === 'User registered successfully') {
            alert('Registration successful! You can now log in.');
            document.getElementById('login-form').classList.remove('hidden');
            document.getElementById('register-form').classList.add('hidden');
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});

// Handle Item Click
document.querySelectorAll('.item').forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById('login-form').classList.remove('hidden');
        document.getElementById('register-form').classList.add('hidden');
        window.scrollTo({ top: document.getElementById('login-form').offsetTop, behavior: 'smooth' });
    });
});
