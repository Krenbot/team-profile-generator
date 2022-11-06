const Manager = require('../lib/Manager')

//Arrange 
const name = manager.name
const id = manager.id
const email = manager.email

//Act
const manager = new Manager(name, id, email, officeNumber)

//Assert
describe('Creates an Engineer object', () => {

    it('Should get an Engineer name', () => {
        expect(manager.name).toEqual(name)
    })

    it('Should get an manager ID', () => {
        expect(manager.ID).toEqual(id)
    })

    it('Should get an manager email', () => {
        expect(manager.name).toEqual(email)
    })

    it('Should have the correct role', () => {
        expect(manager.role).toEqual("Manager")
    })

    it('Should have the correct office number', () => {
        expect(manager.officeNumber).toEqual(officeNumber)
    })
})