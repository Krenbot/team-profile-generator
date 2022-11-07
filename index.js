const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
// const generateHTML = require('./src/generateHTML')

let employees = [];

//Inquirer for MANAGER ?'s:
const inqManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter MANAGER name:',
        }, {
            type: 'input',
            name: 'id',
            message: "Enter the MANAGER\'S ID #:",
        }, {
            type: 'input',
            name: 'email',
            message: 'Enter the MANAGER\'S e-mail:',
        }, {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the MANAGER\'S office number:'
        }
    ])
        .then((info) => {
            let manager = new Manager(info.name, info.id, info.email, info.officeNumber)
            employees.push(manager)
            console.log(manager)
            promptChoices()
        })
}

const promptChoices = () => {
    return inquirer.prompt([{
        type: 'list',
        message: 'What would you like to add?',
        name: 'choices',
        choices: ['Intern', 'Engineer', 'EXIT']
    }
    ])
        .then((info) => {
            console.log(info)
            if (info.choices === 'Intern') {
                //CALL INTERN FUNCTION HERE
            } else if (info.choices === 'Engineer') {
                //CALL ENGINEER FUNCTION HERE
            } else {
                return
            }
        })
}

const inqEngineer = () => {
//name, id, email, github

//Push to employee array

}

const inqIntern = () => {
//name, id, email, school

//Push to employee array

}

//Send Array to HTML

//Create HTML for individual roles

function writeToFile(fileName, data) {
    fs.writeFileSync(
        `./dist/${fileName}`, data)
}

// Function call to initialize app
inqManager();
