const display = document.getElementById('display');

const userData = JSON.parse(localStorage.getItem('userData'));

display.innerHTML = `
    <div>Name: ${userData.name}</div>
    <div>Age: ${userData.age}</div>
`;
