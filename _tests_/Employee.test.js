//Arrange
const Employee = require('../lib/Employee')
const name = 'Jeff'
const id = 5459
const email = 'jeff@test.com'

//Act
const employee = new Employee(name, id, email)

//Assert
describe('Creates an employee object', () => {

    it('Should get an employee name', () => {
        expect(employee.getName()).toEqual(name)
    })

    it('Should get an employee ID', () => {
        expect(employee.id).toEqual(id)
    })

    it('Should get an employee email', () => {
        expect(employee.email).toEqual(email)
    })

    it('Should have the correct role', () => {
        expect(employee.getRole()).toEqual("Employee")
    })
})
