<<<<<<< HEAD
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

=======
>>>>>>> b289a0f59f3e1369c6f0e3088dd652db2c5a3223
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

<<<<<<< HEAD
    saveUserData('/api/login', { email, password });
=======
    // Add login logic here (e.g., API call)
    console.log('Login attempt:', { email, password });
    alert('Login successful!');
>>>>>>> b289a0f59f3e1369c6f0e3088dd652db2c5a3223
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

<<<<<<< HEAD
    saveUserData('/api/signup', { name, email, password });
=======
    // Add signup logic here (e.g., API call)
    console.log('Signup attempt:', { name, email, password });
    alert('Signup successful!');
>>>>>>> b289a0f59f3e1369c6f0e3088dd652db2c5a3223
    return false;
}
