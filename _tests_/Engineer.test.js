//Arrange 
const Engineer = require('../lib/Engineer')
const name = 'Billy'
const id = 3207
const email = 'billy@test.com'
const github = 'https://github.com/test'

//Act
const engineer = new Engineer(name, id, email, github)

//Assert
describe('Creates an Engineer object', () => {

    it('Should get an Engineer name', () => {
        expect(engineer.name).toEqual(name)
    })

    it('Should get an Engineer ID', () => {
        expect(engineer.id).toEqual(id)
    })

    it('Should get an Engineer email', () => {
        expect(engineer.email).toEqual(email)
    })

    it('Should have the correct role', () => {
        expect(engineer.getRole()).toEqual("Engineer")
    })

    it('Should have the correct github', () => {
        expect(engineer.github).toEqual(github)
    })
})