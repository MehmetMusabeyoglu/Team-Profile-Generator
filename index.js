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
        name: "employeeChoice",
        message: "Which type of team member would you like to add?", 
        choices: employeeType,
    }
];

const manager = [
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

const engineer = [
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

const intern = [
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