const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const ourTeam = [];
const employeeType = ["Engineer", "Intern", "I don't want to add any more team members"];

const nextEmployeeQuestion = [
    {
        type: "list",
        name: "employeeType",
        message: "Which type of team member would you like to add?",
        choices: employeeType,
    }
];

const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager's ID?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email address?",
    },
    {
        type: "input",
        name: "managerOffice",
        message: "What is the team manager's office number?",
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's ID?",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email address?",
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",
    }
];

const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
    },
    {
        type: "input",
        name: "internId",
        message: "What is your intern's ID?",
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email address?",
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
    }
];

async function inquirerChain() {
    await inquirer
    .prompt(managerQuestions)
    .then((userInputs) => {
        console.log(userInputs);
        ourTeam.push(new Manager(userInputs.managerName, userInputs.managerId, userInputs.managerEmail, userInputs.managerOffice, "Manager"));
        console.log(ourTeam);
    });

    let inquirerEnd = false;
    let chosenEmployeeType;

    while(!inquirerEnd){
        await inquirer
        .prompt(nextEmployeeQuestion)
        .then((userInputs) => {
            console.log(userInputs);
            chosenEmployeeType = userInputs.employeeType;
        });


        if (chosenEmployeeType === "Engineer") {
            await inquirer
                .prompt(engineerQuestions)
                .then((userInputs) => {
                    console.log(userInputs);
                    ourTeam.push(new Engineer(userInputs.engineerName, userInputs.engineerId, userInputs.engineerEmail, userInputs.engineerGithub, "Engineer"));
                    console.log(ourTeam);
                });
        }
        else if (chosenEmployeeType === "Intern") {
            await inquirer
                .prompt(internQuestions)
                .then((userInputs) => {
                    console.log(userInputs);
                    ourTeam.push(new Intern(userInputs.internName, userInputs.internId, userInputs.internEmail, userInputs.internSchool, "Intern"));
                    console.log(ourTeam);
                });
        }
        else{
            inquirerEnd = true;
            console.log(ourTeam);
        }

    }

}

function init() {

    inquirerChain();

}

// Function call to initialize app
init();