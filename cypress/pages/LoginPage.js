class LoginPage {

    // Locators
    usernameInput = '#username'
    passwordInput = '#password'
    loginButton = '#login-btn'
    errorMessage = '.error-message'

    // Actions
    enterUsername(username) {
        cy.get(this.usernameInput).type(username)
    }

    enterPassword(password) {
        cy.get(this.passwordInput).type(password)
    }

    clickLogin() {
        cy.get(this.loginButton).click()
    }

    login(username, password) {
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLogin()
    }

    verifyErrorMessage() {
        cy.get(this.errorMessage).should('be.visible')
    }

}

export default LoginPage;