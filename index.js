const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const ourTeam = [];
const employeeType = ["Engineer", "Intern", "I don't want to add any more team members"];

// Employee type selection
const nextEmployeeQuestion = [
    {
        type: "list",
        name: "employeeType",
        message: "Which type of team member would you like to add?",
        choices: employeeType,
    }
];

// Manager questions
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

// Engineer questions
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

// Inter questions
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

// Inquirer function for promting questions
async function inquirerChain() {
    await inquirer
        .prompt(managerQuestions)
        .then((userInputs) => {
            // console.log(userInputs);
            ourTeam.push(new Manager(userInputs.managerName, userInputs.managerId, userInputs.managerEmail, userInputs.managerOffice, "Manager"));
            // console.log(ourTeam);
        });

    let inquirerEnd = false;
    let chosenEmployeeType;

    while (!inquirerEnd) {
        await inquirer
            .prompt(nextEmployeeQuestion)
            .then((userInputs) => {
                // console.log(userInputs);
                chosenEmployeeType = userInputs.employeeType;
            });


        if (chosenEmployeeType === "Engineer") {
            await inquirer
                .prompt(engineerQuestions)
                .then((userInputs) => {
                    // console.log(userInputs);
                    ourTeam.push(new Engineer(userInputs.engineerName, userInputs.engineerId, userInputs.engineerEmail, userInputs.engineerGithub, "Engineer"));
                    // console.log(ourTeam);
                });
        }
        else if (chosenEmployeeType === "Intern") {
            await inquirer
                .prompt(internQuestions)
                .then((userInputs) => {
                    // console.log(userInputs);
                    ourTeam.push(new Intern(userInputs.internName, userInputs.internId, userInputs.internEmail, userInputs.internSchool, "Intern"));
                    // console.log(ourTeam);
                });
        }
        else {
            inquirerEnd = true;
            console.log(ourTeam);
        }

    }

}

// Function for adding employee based on user inputs
function appendEmployee(employee) {

    let employeeCard = "";

    if (employee.role === "Manager") {
        employeeCard = `
        <div class="card text-flex bg-primary text-light border-warning col-lg-6 col-md-6 col-12" style="width: 18rem;border-radius: 25px;">
            <div class="card-body">
                <h3 class="card-title text-warning d-flex flex-start"> ${employee.name} </h3>
                <h4 class="card-title text-warning d-flex flex-start"> ${employee.role} <img src="../images/${employee.role}.jpg" width="30" height="30"
                        alt="Manager icon"></h4>
                <p class="card-text d-flex flex-row"><b>ID: </b>  ${employee.id} </p>
                <p class="card-text d-flex flex-row"><b> Email Address: </b> <a class="text-light" href= "mailto:" > ${employee.email} </a></p>
                <p class="card-text d-flex flex-row"><b>Office Number: </b>  ${employee.officeNumber} </p>
                <a href="mailto:${employee.email}" class="btn btn-warning d-flex justify-content-center">Contact me</a>
            </div>
        </div>
            `
    } else if (employee.role === "Engineer") {
        employeeCard = `
        <div class="card text-flex bg-primary text-light border-warning col-lg-6 col-md-6 col-12" style="width: 18rem;border-radius: 25px;">
            <div class="card-body">
                <h3 class="card-title text-warning d-flex flex-start"> ${employee.name} </h3>
                <h4 class="card-title text-warning d-flex flex-start"> ${employee.role} <img src="../images/${employee.role}.jpg" width="30" height="30"
                    alt="Engineer icon"></h4>
                <p class="card-text d-flex flex-row"><b>ID: </b> ${employee.id} </p>
                <p class="card-text d-flex flex-row"><b>Email Address: </b> <a class="text-light" href= "mailto:" > ${employee.email} </a></p>
                <p class="card-text d-flex flex-row"><b>GitHub: </b> <a class="text-light" href="https://github.com/${employee.github}"> ${employee.github}</a> </p>
                <a href="mailto:${employee.email}" class="btn btn-warning d-flex justify-content-center">Contact me</a>
            </div>
        </div>
        `
    } else if(employee.role === "Intern"){
        employeeCard = `
        <div class="card text-flex bg-primary text-light border-warning col-lg-6 col-md-6 col-12" style="width: 18rem;border-radius: 25px;">
            <div class="card-body">
                <h3 class="card-title text-warning d-flex flex-start"> ${employee.name} </h3>
                <h4 class="card-title text-warning d-flex flex-start"> ${employee.role} <img src="../images/${employee.role}.jpg" width="30" height="30"
                    alt="Intern icon"></h4>
                <p class="card-text d-flex flex-row"><b>ID: </b> ${employee.id} </p>
                <p class="card-text d-flex flex-row"><b>Email Address: </b> <a class="text-light" href= "mailto:" > ${employee.email} </a></p>
                <p class="card-text d-flex flex-row"><b>School: </b> ${employee.school} </p>
                <a href="mailto:${employee.email}" class="btn btn-warning d-flex justify-content-center">Contact me</a>
            </div>
         </div>
        `
    }

    return employeeCard;
}

// Function for generating html.index
async function generateHtml(){

    let html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="../dist/style.css" />
        <title>Super Team</title>
    </head>
    
    <body class="w-auto p-3">
        <header class="jumbotron bg-primary text-light">
            <h1 class="display-3 text-warning">Our Team Members</h1>
        </header>
    
        <div class="container d-flex flex-wrap rounded-lg p-3">
    `

    for(let i=0; i<ourTeam.length; i++){

        html = html + appendEmployee(ourTeam[i]);
    }

    html = html + `
    </div>

    </body>
    
    <script src="../index.js"></script>
    
    </html>
    `
    fs.writeFile("dist/index.html", html, (err) =>
    err ? console.log(err) : console.log('Successfully created new index.html')
);

}

// Init function to start inquirer
async function init() {

    await inquirerChain();
    await generateHtml();
    
}

// Function call to initialize app
init();