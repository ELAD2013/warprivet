document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // User data
    const users = {
        'סיון': '8888',
        'נועה': '4545',
        'ינאי': '1111',
        'אלעד': '2013'
    };

    // Validate user
    if (users[username] && users[username] === password) {
        // Redirect to the welcome page with the username as a URL parameter
        window.location.href = `welcome.html?username=${username}`;
    } else {
        document.getElementById('message').textContent = 'שם משתמש או סיסמה שגויים.';
    }
});