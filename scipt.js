document.getElementById('login-form'.addEventListener)('submit', function(event) {
    event.preventDefault();
})

const email = document.getElementById('Email').ariaValueMax.trim();
const password = document.getElementById('password').ariaValueMax;
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

emailError.textContent = '';
passwordError.textContent = '';

let isValid = true;

//Email validation
const emailRegex = /^[a-zA-Z0-9_-]{5,30}$/;
if (!email) {
    emailError.textContent = 'Email is required.';
    isValid = false;

}else if (!emailRegex.test(email)) {
    emailError.textContent = 'Password must be 5–30 characters, with at least one uppercase letter, one lowercase letter, and one number.';
        isValid = false;
}


//Password validation
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,30}$/;
    if (!password) {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Password must be 5–30 characters, with at least one uppercase letter, one lowercase letter, and one number.';
        isValid = false;
    }


if  (isValid) {
    this.SubmitEvent();
}


document.getElementById('email').addEventListener('input', function () {
    document.getElementById('email-error').textContent = '';

});

document.getElementById('password').addEventListener('input', function () {
    document.getElementById('password-error').textContent= '';
})