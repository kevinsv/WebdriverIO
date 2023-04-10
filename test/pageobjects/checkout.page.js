import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputComment () { return $("//div[@id='ordermsg']//textarea") }
    get btnPlaceOrder () { return $("[href='/payment']") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async placeOrder (comment) {
        await expect(this.btnPlaceOrder).toBeDisplayed()
        await this.inputComment.setValue(comment);
        await this.btnPlaceOrder.click();
    }
}

export default new CheckoutPage();
