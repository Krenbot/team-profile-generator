const generateManager = function (employees) {
    return `<article class="card col-3 m-3">
    <div class="card-header background">
        <h2>${employees.manager.name}</h2>
        <h4><i class="fas fa-coffee"></i>Manager</h4>
    </div>
    <div class="card-body">
        <p>ID: ${employees.manager.id}</p>
        <p>Email: <a href="mailto:${employees.manager.email}">${employees.manager.email}</a></p>
        <p>Office Number:${employees.manager.officeNumber}</p>
    </div>
</article>`
}

const generateEngineer = function (employees) {
    return `<article class="card col-3 m-3">
            <div class="card-header background">
                <h2>${employees.engineer.name}</h2>
                <h4><i class="fa-solid fa-glasses"></i>Engineer</h4>
            </div>
            <div class="card-body">
                <p>ID: ${employees.engineer.id}</p>
                <p>Email: <a href="mailto:${employees.engineer.email}">${employees.engineer.email}</a></p>
                <p>GitHub: <a href="${employees.engineer.github}">${employees.engineer.github}</a></p>
            </div>
        </article>`
}

const generateIntern = function (employees) {
    return `<article class="card col-3 m-3">
    <div class="card-header background">
        <h2>${employee.intern.name}</h2>
        <h4><i class="fa-solid fa-user-graduate"></i>Intern</h4>
    </div>
    <div class="card-body">
        <p>ID: ${employees.intern.id}</p>
        <p>Email: <a href="mailto:${employees.intern.email}">${employees.intern.email}</a></p>
        <p>School: ${employees.intern.school}</p>
    </div>
</article>`
}

generateManager();
generateEngineer();
generateIntern();

// module.exports = generateHTML