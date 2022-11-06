const Intern = require('../lib/Intern')

//Arrange 
const name = intern.name
const id = intern.id
const email = intern.email

//Act
const intern = new Intern(name, id, email, school)

//Assert
describe('Creates an Itern object', () => {

    it('Should get an Itern name', () => {
        expect(intern.name).toEqual(name)
    })

    it('Should get an Itern ID', () => {
        expect(intern.ID).toEqual(id)
    })

    it('Should get an Itern email', () => {
        expect(intern.email).toEqual(email)
    })

    it('Should have the correct role', () => {
        expect(intern.role).toEqual("Intern")
    })

    it('Should have the correct school', () => {
        expect(intern.school).toEqual(school)
    })
})