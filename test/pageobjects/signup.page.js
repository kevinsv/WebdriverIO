import homePage from './home.page.js';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputName () { return $("[data-qa='name'")}
    get inputPassword () { return $("[data-qa='password'") }
    get dropdownDays () { return $('#days') }
    get dropdownMonths () { return $('#months') }
    get dropdownYears () { return $('#years') }
    get inputFirstName () { return $("[data-qa='first_name'") }
    get inputLastName () { return $("[data-qa='last_name'") }
    get inputCompany () { return $("[data-qa='company'") }
    get inputAddress () { return $("[data-qa='address'") }
    get inputAddress2 () { return $("[data-qa='address2'") }
    get dropdownCountry () { return $('#country') }
    get inputState () { return $("[data-qa='state'") }
    get inputCity () { return $("[data-qa='city'") }
    get inputZipCode() { return $("[data-qa='zipcode'") }
    get inputMobileNumber() { return $("[data-qa='mobile_number'") }
    get btnCreateAccount() { return $("[data-qa='create-account'") }
    get btnContinue() { return $("[data-qa='continue-button'") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.inputEmailAddress.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async signup (name, email) {
        await this.inputSignUpName.setValue('Kevin');
        await this.inputSignUpEmail.setValue('webdrivertest01@yopmail.com');
        await this.btnSignUp.click();
    }

    async createAccountInformation () {
        await expect(this.btnCreateAccount).toBeDisplayed()
        await this.inputPassword.setValue('webdriverIOTest01');
        await this.dropdownDays.selectByAttribute('value', '16');
        await this.dropdownMonths.selectByAttribute('value', '2');
        await this.dropdownYears.selectByAttribute('value', "1990");
        await this.inputFirstName.setValue('Kevin');
        await this.inputLastName.setValue('Salgado');
        await this.inputCompany.setValue('QATest');
        await this.inputAddress.setValue('3731 Berkley Street');
        await this.inputAddress2.setValue('Test');
        await this.dropdownCountry.selectByAttribute('value', 'United States');
        await this.inputState.setValue('PA');
        await this.inputCity.setValue('Pottstown');
        homePage.browserScroll(430,1508);
        await this.inputZipCode.setValue('19464');
        await this.inputMobileNumber.setValue('6107530741');
        await this.btnCreateAccount.click();
    }

    async clickContinueInAccountCreated() {
        await expect(this.btnContinue).toBeDisplayed();
        await this.btnContinue.click();
    }
}

export default new SignUpPage();
