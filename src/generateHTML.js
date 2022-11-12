const fs = require('fs')

const generateManager = function (employeeData) {
    return `<article class="card col-3 m-3">
    <div class="card-header background">
        <h2>${employeeData.name}</h2>
        <h4><i class="fas fa-coffee"></i>Manager</h4>
    </div>
    <div class="card-body">
        <p>ID: ${employeeData.id}</p>
        <p>Email: <a href="mailto:${employeeData.email}">${employeeData.email}</a></p>
        <p>Office Number:${employeeData.officeNumber}</p>
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

module.exports = {generateManager, generateEngineer, generateIntern}