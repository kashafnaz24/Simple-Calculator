#! /usr/bin/env node
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter second number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "selecte one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
// Condition statement
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    if (answers.secondNumber !== 0) {
        console.log(answers.firstNumber / answers.secondNumber);
    }
    else {
        console.log("Cannot divide by zero");
    }
}
