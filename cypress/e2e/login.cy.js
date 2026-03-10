import LoginPage from '../pages/LoginPage'

describe('Login Test Suite', () => {

    const loginPage = new LoginPage()

    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/')
    })

    it('Verify user can login with valid credentials', () => {

        loginPage.login('testuser', 'password123')

        cy.url().should('include', '/dashboard')

    })

    it('Verify error message for invalid login', () => {

        loginPage.login('wronguser', 'wrongpass')

        loginPage.verifyErrorMessage()

    })

})