const Engineer = require('../lib/Engineer')
const engineer = new Engineer('Billy', 3207, 'billy@test.com', 'https://github.com/test')

//Arrange 
const name = engineer.name
const id = engineer.id
const email = engineer.email
const github = engineer.github

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