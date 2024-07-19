document.getElementById('signin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
    window.scrollTo({ top: document.getElementById('login-form').offsetTop, behavior: 'smooth' });
});

document.getElementById('signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    window.scrollTo({ top: document.getElementById('register-form').offsetTop, behavior: 'smooth' });
});

document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform validation and then navigate to the home screen
    alert('Login successful! Navigating to the home screen...');
    // Code to navigate to home screen
});

document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform validation and then show a success message
    alert('Registration successful! You can now log in.');
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
});

// Add click event listener to each item image to navigate to the sign-in form
document.querySelectorAll('.item').forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById('login-form').classList.remove('hidden');
        document.getElementById('register-form').classList.add('hidden');
        window.scrollTo({ top: document.getElementById('login-form').offsetTop, behavior: 'smooth' });
    });
});
