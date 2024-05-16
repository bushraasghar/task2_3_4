// 1) Define a function calculateArea that takes the radius of a circle as a parameter and returns the area of the circle.
// 2) Define a function calculateCircumference that takes the radius of a circle as a parameter and returns the circumference of the circle.
// 3) Prompt the user to enter the radius of the circle.
// 4) Calculate and output both the area and circumference of the circle using the defined functions.
// 5) Ensure proper error handling for invalid inputs (e.g., negative radius).
import inquirer from 'inquirer';
import chalk from 'chalk';
let r = await inquirer.prompt([{
        name: 'coder',
        message: 'Hey coder! Enter a circle radius: ',
        type: 'input'
    }]);
function calculateArea(r) {
    let pi = 3.14;
    return r * r * pi;
}
console.log(chalk.green('Area of a circle is: ' + chalk.yellow(calculateArea(r.coder))));
console.log(chalk.green("Circumference of a circle is: " + chalk.yellow(calculateArea(r.coder * 2 * 3.14).toFixed(2))));
