import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MenuHeaderPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnCart () { return $("[href='/view_cart']") }
    get btnLogout () { return $("//ul[@class='nav navbar-nav']//a[@href='/logout']") }
    get btnLogin () { return $("[href='/login']") }
    get btnContactUs () { return $("[href='/contact_us']") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickCart () {
        await this.btnCart.click();
    }

    async clickLogout () {
        await this.btnLogout.click();
    }

    async clickLogin () {
        await this.btnLogin.click();
    }

    async clickContactUs () {
        await this.btnLogin.click();
    }
}

export default new MenuHeaderPage();
