function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Add login logic here (e.g., API call)
    console.log('Login attempt:', { email, password });
    alert('Login successful!');
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

    // Add signup logic here (e.g., API call)
    console.log('Signup attempt:', { name, email, password });
    alert('Signup successful!');
    return false;
}
