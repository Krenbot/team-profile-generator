const Employee = require('../lib/Employee')
const employee = new Employee('Jeff', 5459, 'jeff@test.com')

//Arrange 
const name = employee.getName()
const id = employee.getId()
const email = employee.getEmail()

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
