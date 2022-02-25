const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("You need to enter your name!");
                return false;
            }
        }
    },
]


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            
            // writeToFile('./dist/README.MD', generateMarkdown(data))
        });
};

// Function call to initialize app
init();