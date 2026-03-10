// Form validation and submission handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginButton = loginForm.querySelector('.login-button');
    const buttonText = loginButton.querySelector('.button-text');
    const buttonLoader = loginButton.querySelector('.button-loader');

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Password validation function
    function validatePassword(password) {
        return password.length >= 6;
    }

    // Clear error on input
    emailInput.addEventListener('input', function() {
        emailInput.classList.remove('error');
        emailError.textContent = '';
    });

    passwordInput.addEventListener('input', function() {
        passwordInput.classList.remove('error');
        passwordError.textContent = '';
    });

    // Form submission handler
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        emailError.textContent = '';
        passwordError.textContent = '';
        emailInput.classList.remove('error');
        passwordInput.classList.remove('error');

        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const rememberMe = document.getElementById('rememberMe').checked;

        let isValid = true;

        // Validate email
        if (!email) {
            emailError.textContent = 'Email is required';
            emailInput.classList.add('error');
            isValid = false;
        } else if (!validateEmail(email)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.add('error');
            isValid = false;
        }

        // Validate password
        if (!password) {
            passwordError.textContent = 'Password is required';
            passwordInput.classList.add('error');
            isValid = false;
        } else if (!validatePassword(password)) {
            passwordError.textContent = 'Password must be at least 6 characters';
            passwordInput.classList.add('error');
            isValid = false;
        }

        // If validation passes, submit the form
        if (isValid) {
            // Disable button and show loader
            loginButton.disabled = true;
            buttonText.style.display = 'none';
            buttonLoader.style.display = 'inline-block';

            // Simulate API call
            setTimeout(function() {
                console.log('Login attempt:', {
                    email: email,
                    password: '***hidden***',
                    rememberMe: rememberMe
                });

                // Show success message
                alert('Login successful! (This is a demo)');

                // Re-enable button
                loginButton.disabled = false;
                buttonText.style.display = 'inline';
                buttonLoader.style.display = 'none';

                // Reset form (optional)
                // loginForm.reset();

                // In a real application, you would redirect or update the UI here
                // window.location.href = '/dashboard';
            }, 1500);
        }
    });

    // Handle "Forgot password" link
    document.querySelector('.forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Password reset functionality would be implemented here.');
    });

    // Handle "Sign up" link
    document.querySelector('.signup-link a').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Sign up page would be implemented here.');
    });
});
