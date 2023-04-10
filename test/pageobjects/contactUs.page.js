import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class contactUsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputName () { return $("[data-qa='name']") }
    get inputEmail () { return $("[data-qa='email']") }
    get inputSubject () { return $("[data-qa='subject']") }
    get inputMessage () { return $('#message') }
    get btnSubmit () { return $("[data-qa='submit-button']") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async completeContactUs (name,email,subject,message) {
        await expect(this.btnSubmit).toBeDisplayed()
        await this.inputName.setValue(name)
        await this.inputEmail.setValue(email)
        await this.inputSubject.setValue(subject)
        await this.inputMessage.setValue(message)
        await this.btnSubmit.click()
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

export default new contactUsPage();
