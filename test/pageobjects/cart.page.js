import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnProceedToCheckout () { return $('.btn-default.check_out') }
    get modalCheckout () { return $('#checkoutModal') }
    get btnSuccessCheckout() { return $('.btn-success.close-checkout-modal') }
    get linkRegisterAndLogin() { return $("//div[@class='modal-content']//a[@href='/login']") }

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */        

    async clickProceedToCheckout () {
        await expect(this.btnProceedToCheckout).toBeDisplayed()
        await this.btnProceedToCheckout.click();
        //await expect(this.modalCheckout).toBeDisplayed()
    }

    async clickCheckoutSuccess () {
        await expect(this.btnSuccessCheckout).toBeDisplayed()
        await this.btnSuccessCheckout.click();
    }

    async clickRegisterAndLogin () {
        await expect(this.modalCheckout).toBeDisplayed()
        await this.linkRegisterAndLogin.click();
    }
}

export default new CartPage();
