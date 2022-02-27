const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let team = {
  manager: null,
  engineers: [],
  interns: [],
}

function init() {
  inquirer.prompt([
    {
      type: "input",
      name: "mName",
      message: "What is the manager's name?"
    },
    {
      type: "input",
      name: "mId",
      message: "What is the manager's employee ID number?"
    },
    {
      type: "input",
      name: "mEmail",
      message: "What is the manager's email address?"
    },
    {
      type: "input",
      name: "mOfficeNumber",
      message: "What is the manager's office number?"
    }
  ]).then(answer => {
    team.manager = new Manager(answer.mName, answer.mId, answer.mEmail, answer.mOfficeNumber);
    addTeamMember();
  })
}

// using switch to select addIntern, addEngineer or end command-line and create HTML file
function addTeamMember() {
  inquirer.prompt([{
    type: "list",
    message: "which role of employee would you likt to add?",
    name: "roleSelect",
    choices: ["Engineer", "Intern", "No More"]
  }]).then(function (userInput) {
    switch (userInput.roleSelect) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      case "No More":
        generatePage(team);
        console.log(team);
        writeToFile('./dist/index.html', generatePage(team));
        break;
    }
  })
}

// function add Engineer when select engineer in console
function addEngineer() {
  inquirer.prompt([

    {
      type: "input",
      name: "eName",
      message: "What is the engineer's name?"
    },

    {
      type: "input",
      name: "eId",
      message: "What is the engineer's employee ID number?"
    },

    {
      type: "input",
      name: "eEmail",
      message: "What is the engineer's email address?"
    },

    {
      type: "input",
      name: "eGithubName",
      message: "What is the engineer's GitHub username?"
    }
  ]).then(answers => {
    const engineer = new Engineer(answers.eName, answers.eId, answers.eEmail, answers.eGithubName);
    team.engineers.push(engineer);
    addTeamMember();
  });
}

// function add Intern when select intern in console
function addIntern() {
  inquirer.prompt([

    {
      type: "input",
      name: "iName",
      message: "What is the intern's name?"
    },

    {
      type: "input",
      name: "iId",
      message: "What is the intern's employee ID number?"
    },

    {
      type: "input",
      name: "iEmail",
      message: "What is the intern's email address?"
    },

    {
      type: "input",
      name: "iSchool",
      message: "What school does the intern attend?"
    }

  ]).then(answers => {
    const intern = new Intern(answers.iName, answers.iId, answers.iEmail, answers.iSchool);
    team.interns.push(intern);
    addTeamMember();
  });

}

// save html function use it on line 60
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err =>
      err ? console.log(err) : console.log('Success!'));
}

init();
