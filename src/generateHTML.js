const generateManager = function () {

}

const generateEngineer = function () {

}

const generateIntern = function () {

}

<div class="col-12 col-md-6 col-lg-4">
<div class="card">
    <div class="card-header bg-primary text-white">
        <h5 class="card-title">${eng.name}</h5>
        <h6 class="card-subtitle">${eng.role}</h6>
    </div>
    <div class="card-body">
        <p class="card-text">Employee ID: ${eng.id}</p>
        <p>Email: <a href="mailto:${eng.email}" class="card-link">${eng.email}</a></p>
        <p>GitHub: <a href="https://github.com/${eng.github}" class="card-link">${eng.github}</a></p>
    </div>
</div>
</div>


// module.exports = generateHTML