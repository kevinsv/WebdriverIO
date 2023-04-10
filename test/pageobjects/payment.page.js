import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PaymentPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputCardName () { return $("[data-qa='name-on-card']") }
    get inputCardNumber () { return $("[data-qa='card-number']") }
    get inputCcv () { return $("[data-qa='cvc']") }
    get inputExpiredMonth () { return $("[data-qa='expiry-month']") }
    get inputExpiredYear ()  { return $("[data-qa='expiry-year']") }
    get btnPay () { return $("[data-qa='pay-button']") }
    get btnContinue () { return $("[data-qa='continue-button']") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async FillCreditCardInformationAndPay (cardName, cardNumber, cvc, expiredMonth, expiredYear) {
        await expect(this.btnPay).toBeDisplayed()
        await this.inputCardName.setValue(cardName)
        await this.inputCardNumber.setValue(cardNumber)
        await this.inputCcv.setValue(cvc)
        await this.inputExpiredMonth.setValue(expiredMonth)
        await this.inputExpiredYear.setValue(expiredYear)
        await this.btnPay.click()
    }

    async clickContinue () {
        await expect(this.btnContinue).toBeDisplayed()
        await this.btnContinue.click()
    }
}

export default new PaymentPage();
