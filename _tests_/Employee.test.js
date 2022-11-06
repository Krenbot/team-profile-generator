const Employee = require('../lib/Employee')

//Arrange 
const name = employee.name
const id = employee.id
const email = employee.email

//Act
const employee = new Employee(name, id, email)

//Assert
describe('Creates an employee object', () => {

    it('Should get an employee name', () => {
        expect(employee.name).toEqual(name)
    })

    it('Should get an employee ID', () => {
        expect(employee.ID).toEqual(id)
    })

    it('Should get an employee email', () => {
        expect(employee.name).toEqual(email)
    })

    it('Should have the correct role', () => {
        expect(employee.role).toEqual("Employee")
    })
})
