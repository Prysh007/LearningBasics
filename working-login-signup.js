async function saveUserData(endpoint, data) {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result.message);
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    saveUserData('/api/login', { email, password });
    return false;
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    saveUserData('/api/signup', { name, email, password });
    return false;
}
