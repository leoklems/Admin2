document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.querySelector('button');
    
    // Attach focus out event to each input field
    document.querySelectorAll('input').forEach(function (input) {
        input.addEventListener('focusout', function () {
            validateForm();
        });
    });

    // Attach click event to the submit button
    submitButton.addEventListener('click', function () {
        validateForm();
    });

    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;

        // Reset errors
        resetErrors();

        // Validate name
        if (name.trim() === '') {
            showError('name', 'Name is required');
        }

        // Validate email
        if (!isValidEmail(email)) {
            showError('email', 'Invalid email format');
        }

        // Validate password
        if (password.length < 6) {
            showError('password', 'Password must be at least 6 characters');
        }

        // Validate confirm password
        if (confirmPassword !== password) {
            showError('confirmPassword', 'Passwords do not match');
        }

        // If no errors, show the submit button
        if (document.querySelectorAll('.error').length === 0) {
            submitButton.style.display = 'inline-block';
        } else {
            submitButton.style.display = 'none';
        }
    }

    function isValidEmail(email) {
        // Basic email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(field, errorMessage) {
        var errorElement = document.getElementById(field + 'Error');
        errorElement.innerHTML = errorMessage;
    }

    function resetErrors() {
        var errorElements = document.querySelectorAll('.error');
        errorElements.forEach(function (element) {
            element.innerHTML = '';
        });
    }
});
