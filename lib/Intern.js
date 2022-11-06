const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        //Calls and fills in Employee data
        super(name, id, email)

        this.school = school
    }

    getSchool(){
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Manager