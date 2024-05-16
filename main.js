// Requirements 
// Use a switch-case statement to evaluate a variable representing a day of the week (e.g., 'Monday', 'Tuesday', etc.).
// Implement cases for each day from Monday to Friday, with specific messages for each.
// Implement a default case for the weekend (Saturday and Sunday), providing a different message.
// Ensure the switch-case statement is concise and covers all possible inputs.
//  Expected Output 
// When given 'Monday', output "Start of the workweek. Time to be productive!"
// When given 'Tuesday', output "Second day of the workweek. Keep the momentum going!"
// When given 'Wednesday', output "Midweek. Almost there!"
// When given 'Thursday', output "It's Thursday. The weekend is in sight!"
// When given 'Friday', output "Last workday. Finish strong!"
// For any other input (weekend), output "Enjoy your weekend!"
import inquirer from "inquirer";
import chalk from "chalk";
let days = await inquirer.prompt([{
        name: "day",
        message: "Select the week of the day: ",
        type: "list",
        choices: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    }]);
switch (days.day) {
    case ('monday'):
        console.log(chalk.italic.green("Start of the workweek. Time to be productive!"));
        break;
    case ('tuesday'):
        console.log(chalk.italic.blue("Second day of the workweek. Keep the momentum going!"));
        break;
    case ('wednesday'):
        console.log(chalk.italic.yellow("Midweek. Almost there!"));
        break;
    case ('thursday'):
        console.log(chalk.italic.magenta("It's Thursday. The weekend is in sight!"));
        break;
    case ('friday'):
        console.log(chalk.italic.gray("Last workday. Finish strong!"));
        break;
    default:
        console.log(chalk.italic.red("Enjoy your weekend"));
        break;
}
