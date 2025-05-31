const prompt = require('prompt-sync')({ sigint: true });

while (true) {
    const a = parseFloat(prompt('Enter first value: '));
    const b = parseFloat(prompt('Enter second value: '));
    const operation = prompt('Enter the Operation (+, -, *, /): ');
    let result;

    if (isNaN(a) || isNaN(b)) {
        console.log('\nEnter a valid number\n');
        continue;
    }

    switch (operation) {
        case '+':
            result = a + b;
            console.log(`\nResult after addition: ${result}\n`);
            break;
        case '-':
            result = a - b;
            console.log(`\nResult after subtraction: ${result}\n`);
            break;
        case '*':
            result = a * b;
            console.log(`\nResult after multiplication: ${result}\n`);
            break;
        case '/':
            if (b === 0) {
                console.log('\nDivision by zero is not allowed\n');
                break;
            }
            result = a / b;
            console.log(`\nResult after division: ${result}\n`);
            break;
        default:
            console.log('\nEnter a valid input\n');
    }
}
