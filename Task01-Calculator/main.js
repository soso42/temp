/** კალკულატორი
 ორ ოპერანდს შორის სხვადასხვა არითმეტიკული მოქმედებები (+, -, *, /, %, **)
 რიცხვების ვალიდირება
 შედეგის წარმატებით გამოტანა, სწორი ინპუტების შემთხვევაში javasc
 */




function game() {
    let num1 = getNumber('1');
    if (num1 === null) {
        return;
    }
    let operand = getOperand();
    if (operand === null) {
        return;
    }
    let num2 = getNumber('2');
    if (num2 === null) {
        return;
    }

    switch (operand) {
        case '+':
            alert('The result of calculation is: ' + num1 + num2);
            break;
        case '-':
            alert('The result of calculation is: ' + num1 - num2);
            break;
        case '*':
            alert('The result of calculation is: ' + num1 * num2);
            break;
        case '/':
            if (num2 === 0) {
                alert('Error! Division by ZERO!');
                break;
            }
            alert('The result of calculation is: ' + num1 / num2);
            break;
        case '%':
            alert('The result of calculation is: ' + num1 % num2);
            break;
        case '**':
            alert('The result of calculation is: ' + num1 ** num2);
            break;
    }
}

function getNumber(n) {
    while (true) {
        let input = prompt(`Please enter number ${n}:\nClicking 'Cancel' will end the program` );
        if (input === null) {
            return null;
        } else if (input.length === 0) {
            alert('This field can not be empty. Try again...');
            continue;
        } else if (isNaN(+input)) {
            alert('You must enter a number. Try again...');
            continue;
        }
        return +input;
    }
}

function getOperand() {
    const VALID_OPERANDS = ['+', '-', '*', '/', '%', '**'];
    while (true) {
        let input = prompt(`Please enter operand. valid operands are: ${VALID_OPERANDS.join(' ')} :
                                            \nClicking 'Cancel' will end the program`);
        if (input === null) {
            return null;
        } else if (VALID_OPERANDS.includes(input)) {
            return input;
        }
        alert('Invalid operand. Try again...');
    }
}

game();