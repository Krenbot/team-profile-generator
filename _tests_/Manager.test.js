const Manager = require('../lib/Manager')
const manager = new Manager('Tim', 2574, 'tim@test.com', 5533)

//Arrange 
const name = manager.name
const id = manager.id
const email = manager.email
const officeNumber = manager.officeNumber

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