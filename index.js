const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHTML')

//Inquirer for MANAGER ?'s:
//name, id, email, officeNumber
const inqManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter MANAGER name:',

            type: 'input',
            name: 'id',
            message: "Enter the MANAGER\'S ID #:",

            type: 'input',
            name: 'email',
            message: 'Enter the MANAGER\'S e-mail:',

            type: 'input',
            name: 'officeNumber',
            message: 'Enter the MANAGER\'S office number:'
        }
    ])
}


//Inquirer for Engineer ?'s:
//name, id, email, github

//Inquirer for Intern ?'s:
//name, id, email, school

//Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project\'s name?',
        name: 'title'
    },
];

//Write INDEX.HTML file
function writeToFile(fileName, data) {
    fs.writeFileSync(
        `./dist/${fileName}`, data)
}

//Initialize app
function init() {
    return inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile('index.html', generateHTML(response))
        })
}

// Function call to initialize app
init();