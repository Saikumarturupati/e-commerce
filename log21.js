document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here, you would normally send this data to a server
    console.log('Registered:', { username, email, password });
    alert('Registration successful!');
    // Optionally redirect to login page
    window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit',function (event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Here, you would typically validate credentials
    console.log('Logged in:', { username, password });
    alert('Login successful!');
    // Redirect or take further action
    // document.getElementById

});
