document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // User data
    const users = {
        'סיון': '8888',
        'נועה': '4545',
        'ינאי': '1111',
        'אלעד': '2013',
        'אלון': '4321',
        'מאיה': '0987'
    };

    // User ranks
    const ranks = {
        'סיון': 'פקיד',
        'נועה': 'מנהל',
        'ינאי': 'רמטכ"ל',
        'אלעד': 'רמטכ"ל',
        'אלון': 'מתחיל',
        'מאיה': 'מתחיל'
    };

    // Validate user
    if (users[username] && users[username] === password) {
        // Redirect to the welcome page with the username and rank as URL parameters
        const rank = ranks[username];
        window.location.href = `welcome.html?username=${username}&rank=${rank}`;
    } else {
        document.getElementById('message').textContent = 'שם משתמש או סיסמה שגויים.';
    }
});