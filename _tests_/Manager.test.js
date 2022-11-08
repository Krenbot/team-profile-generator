//Arrange
const Manager = require('../lib/Manager')
const name = 'Tim'
const id = 2574
const email = 'tim@test.com'
const officeNumber = 5533

//Act
const manager = new Manager(name, id, email, officeNumber)

//Assert
describe('Creates an Engineer object', () => {

    it('Should get an Engineer name', () => {
        expect(manager.name).toEqual(name)
    })

    it('Should get an manager ID', () => {
        expect(manager.id).toEqual(id)
    })

    it('Should get an manager email', () => {
        expect(manager.email).toEqual(email)
    })

    it('Should have the correct role', () => {
        expect(manager.getRole()).toEqual("Manager")
    })

    it('Should have the correct office number', () => {
        expect(manager.officeNumber).toEqual(officeNumber)
    })
})