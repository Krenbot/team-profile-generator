const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHTML')

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
            promptChoices()
        })
}

//Inquirer Prompt for adding more employees
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
                inqIntern()
            } else if (info.choices === 'Engineer') {
                inqEngineer();
            } else {
                return
            }
        })
}

const inqEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter ENGINEER name:',
        }, {
            type: 'input',
            name: 'id',
            message: "Enter the ENGINEER\'S ID #:",
        }, {
            type: 'input',
            name: 'email',
            message: 'Enter the ENGINEER\'S e-mail:',
        }, {
            type: 'input',
            name: 'github',
            message: 'Enter the ENGINEER\'S GitHub:'
        }
    ])
        //Push to employee array
        .then((info) => {
            let engineer = new Engineer(info.name, info.id, info.email, info.github)
            employees.push(engineer)
            promptChoices()
        })
}

const inqIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter INTERN name:',
        }, {
            type: 'input',
            name: 'id',
            message: "Enter the INTERN\'S ID #:",
        }, {
            type: 'input',
            name: 'email',
            message: 'Enter the INTERN\'S e-mail:',
        }, {
            type: 'input',
            name: 'school',
            message: 'Enter the INTERN\'S school:'
        }
    ])
        //Push to employee array
        .then((info) => {
            let intern = new Intern(info.name, info.id, info.email, info.school)
            employees.push(intern)
            promptChoices()
        })
}

function writeToFile(data) {
    fs.writeFileSync(
        `./dist/index.html`, data, (err) => {
            if (err) throw err;
        })
}

// Function call to initialize app
inqManager();
writeToFile();