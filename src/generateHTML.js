const fs = require('fs')

const generateTeam = team => {

    const generateManager = manager => {
        return `<article class="card col-3 m-3">
    <div class="card-header background">
        <h2>${manager.name()}</h2>
        <h4><i class="fas fa-coffee"></i>Manager</h4>
    </div>
    <div class="card-body">
        <p>ID: ${manager.id()}</p>
        <p>Email: <a href="mailto:${manager.Email()}">${manager.Email()}</a></p>
        <p>Office Number:${manager.OfficeNumber()}</p>
    </div>
</article>`
    }

    const generateEngineer = function (employeeData) {
        return `<article class="card col-3 m-3">
            <div class="card-header background">
                <h2>${employeeData.name}</h2>
                <h4><i class="fa-solid fa-glasses"></i>Engineer</h4>
            </div>
            <div class="card-body">
                <p>ID: ${employeeData.id}</p>
                <p>Email: <a href="mailto:${employeeData.email}">${employeeData.email}</a></p>
                <p>GitHub: <a href="${employeeData.github}">${employeeData.github}</a></p>
            </div>
        </article>`
    }

    const generateIntern = function (employeeData) {
        return `<article class="card col-3 m-3">
    <div class="card-header background">
        <h2>${employeeData.name}</h2>
        <h4><i class="fa-solid fa-user-graduate"></i>Intern</h4>
    </div>
    <div class="card-body">
        <p>ID: ${employeeData.id}</p>
        <p>Email: <a href="mailto:${employeeData.email}">${employeeData.email}</a></p>
        <p>School: ${employeeData.school}</p>
    </div>
</article>`
    }

    const html = []
    html.push(team
        .filter(employees => employees.getRole() === 'Manager')
        .map(manager => generateManager(manager))
    );

    html.push(team
        .filter(employees => employees.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
    );

    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
    );

    return html.join('')
}
module.exports = team => {
    `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel='stylesheet' href='style.css' />

    <title>Team Profiles</title>
</head>

<body>
    <header>
        <h1>Web Development Team</h1>
    </header>
    
    <main class="row justify-content-center">
${generateTeam(team)}
    </main>
</body>

</html>
`
};