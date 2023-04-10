

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmailAddress () { return $("[data-qa='login-email']") }
    get inputPassword () { return $("[data-qa='login-password']") }
    get btnLogin () { return $("[data-qa='login-button']") }
    get inputSignUpName() {return $("[data-qa='signup-name']") }
    get inputSignUpEmail() { return $("[data-qa='signup-email']") }
    get btnSignUp () { return $("[data-qa='signup-button']") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await expect(this.btnLogin).toBeDisplayed()
        await this.inputEmailAddress.setValue(email)
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }

    async signup (name, email) {
        await expect(this.btnSignUp).toBeDisplayed()
        await this.inputSignUpName.setValue(name)
        await this.inputSignUpEmail.setValue(email)
        await this.btnSignUp.click()
    }

    async createAccountInformation (name, email) {
        await expect(this.btnSignUp).toBeDisplayed()
        await this.inputSignUpName.setValue(name)
        await this.inputSignUpEmail.setValue(email)
        await this.btnSignUp.click()
    }


}

export default new LoginPage();
