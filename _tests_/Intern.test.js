//Arrange 
const Intern = require('../lib/Intern')
const name = 'Kyle'
const id = 2094
const email = 'kyle@test.com'
const school = 'UW-Madison'

//Act
const intern = new Intern(name, id, email, school)

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