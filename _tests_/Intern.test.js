const Intern = require('../lib/Intern')
const intern = new Intern('Kyle', 2094, 'kyle@test.com', 'UW Madison')

//Arrange 
const name = intern.name
const id = intern.id
const email = intern.email
const school = intern.school

//Assert
describe('Creates an Itern object', () => {

    it('Should get an Itern name', () => {
        expect(intern.name).toEqual(name)
    })

    it('Should get an Itern ID', () => {
        expect(intern.id).toEqual(id)
    })

    it('Should get an Itern email', () => {
        expect(intern.email).toEqual(email)
    })

    it('Should have the correct role', () => {
        expect(intern.getRole()).toEqual("Intern")
    })

    it('Should have the correct school', () => {
        expect(intern.school).toEqual(school)
    })
})