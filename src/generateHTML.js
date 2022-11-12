function generateHTML(employees) {

    const generateManager = function (manager) {
        return `<article class="card col-3 m-3">
    <div class="card-header background">
        <h2>${manager.name}</h2>
        <h4><i class="fas fa-coffee"></i>Manager</h4>
    </div>
    <div class="card-body">
        <p>ID: ${manager.id}</p>
        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p>Office Number:${manager.officeNumber}</p>
    </div>
</article>`
    }

    const generateEngineer = function (engineer) {
        return `<article class="card col-3 m-3">
            <div class="card-header background">
                <h2>${engineer.name}</h2>
                <h4><i class="fa-solid fa-glasses"></i>Engineer</h4>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href="${engineer.github}">${engineer.github}</a></p>
            </div>
        </article>`
    }

    const generateIntern = function (intern) {
        return `<article class="card col-3 m-3">
    <div class="card-header background">
        <h2>${intern.name}</h2>
        <h4><i class="fa-solid fa-user-graduate"></i>Intern</h4>
    </div>
    <div class="card-body">
        <p>ID: ${intern.id}</p>
        <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p>School: ${intern.school}</p>
    </div>
</article>`
    }

    generateManager();
    generateEngineer();
    generateIntern();
}


module.exports = generateHTML