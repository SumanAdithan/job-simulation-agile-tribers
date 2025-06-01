const userName = document.getElementById('name');
const age = document.getElementById('age');
const submitBtn = document.getElementById('submit');
const output = document.getElementById('output');
const nameError = document.getElementById('nameError');
const ageError = document.getElementById('ageError');

const validation = (name, age) => {
    let errors = {};

    if (!name || typeof name !== 'string' || name.trim() === '') {
        errors.name = 'Name is required';
    }

    if (age === undefined || age === null || age === '') {
        errors.age = 'Age is required.';
    } else if (isNaN(age)) {
        errors.age = 'Age must be a number.';
    } else if (age < 0 || age > 120) {
        errors.age = 'Age must be between 0 and 120.';
    }

    return errors;
};

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nameError.innerText = '';
    ageError.innerText = '';

    const error = validation(userName.value, age.value);

    if (error.name) {
        nameError.innerText = error.name;
        return;
    }

    if (error.age) {
        ageError.innerText = error.age;
        return;
    }

    localStorage.setItem('userData', JSON.stringify({ name: userName.value, age: age.value }));
    window.location.href = './display.html';
});
