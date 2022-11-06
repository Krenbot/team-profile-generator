const Engineer = require('../lib/Engineer')

//Arrange 
const name = engineer.name
const id = engineer.id
const email = engineer.email

//Act
const engineer = new Engineer(name, id, email, github)

//Assert
describe('Creates an Engineer object', () => {

    it('Should get an Engineer name', () => {
        expect(engineer.name).toEqual(name)
    })

    it('Should get an Engineer ID', () => {
        expect(engineer.ID).toEqual(id)
    })

    it('Should get an Engineer email', () => {
        expect(engineer.name).toEqual(email)
    })

    it('Should have the correct role', () => {
        expect(engineer.role).toEqual("Engineer")
    })

    it('Should have the correct github', () => {
        expect(engineer.role).toEqual(github)
    })
})