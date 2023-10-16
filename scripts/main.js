
// Run code when the document loads
$(document).ready(function() {

    // ---------------------------------------------------------------------------------------------------
    // Sign up form
    // ---------------------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------------------
    // On Submit, prevent the default form submission

    $('#signupForm').submit(function(event) {

        event.preventDefault();
        
        if (this.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Add any submission code here, like saving the data to localStorage
            window.location.href = 'pages/browse.html';
        }
        $(this).addClass('was-validated');
    });
});
document.getElementById('signupForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const regexNumber = /\d/;
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;

    if (!regexNumber.test(password) || !regexUpperCase.test(password) || !regexLowerCase.test(password)) {
        event.preventDefault();  
        alert('Password must contain at least one number, one uppercase letter, and one lowercase letter.');
    }

    if (password !== confirmPassword) {
        event.preventDefault(); 
        alert('Passwords do not match.');
    }
});