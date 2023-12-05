const form = document.querySelector('#signup');
const usernameEl = form.querySelector('#username');
const emailEl = form.querySelector('#email');
const passwordEl = form.querySelector('#password');
const confirmPasswordEl = form.querySelector('#confirm-password');

const isRequired = value => value === '';
const isBetween = (length, min, max) => length < min || length > max;
const isEmailValid = email => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
const isPasswordSecure = password => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/.test(password);

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    formField.querySelector('small').textContent = message;
};

const showSuccess = input => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    formField.querySelector('small').textContent = '';
};

const checkField = (field, validationFn, errorMessage) => {
    const value = field.value.trim();
    const isValid = !isRequired(value) && validationFn(value);
    isValid ? showSuccess(field) : showError(field, errorMessage);
    return isValid;
};

const checkUsername = () => checkField(usernameEl, value => !isBetween(value.length, 3, 25), 'Username must be between 3 and 25 characters');
const checkEmail = () => checkField(emailEl, isEmailValid, 'Email is not valid');
const checkPassword = () => checkField(passwordEl, isPasswordSecure, 'Password must have at least 8 characters, including 1 lowercase, 1 uppercase, 1 number, and 1 special character');
const checkConfirmPassword = () => {
    const isValid = checkField(confirmPasswordEl, () => confirmPasswordEl.value.trim() === passwordEl.value.trim(), 'Confirm password does not match');
    return isValid;
};

const saveFormData = () => {
    const existingDataJSON = localStorage.getItem('formData');
    const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : {};

    const formData = { 
        username: usernameEl.value.trim(), 
        email: emailEl.value.trim(),
        password: passwordEl.value.trim(),
        confirmPassword: confirmPasswordEl.value.trim(),
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form data saved successfully!');
};

form.addEventListener('submit', e => {
    e.preventDefault();
    const isValid = [checkUsername, checkEmail, checkPassword, checkConfirmPassword].every(validationFn => validationFn());
    isValid && saveFormData() && form.reset();
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(null, args), delay);
    };
};

form.addEventListener('input', debounce(e => {
    switch (e.target.id) {
        case 'username': checkUsername(); break;
        case 'email': checkEmail(); break;
        case 'password': checkPassword(); break;
        case 'confirm-password': checkConfirmPassword(); break;
    }
}));
