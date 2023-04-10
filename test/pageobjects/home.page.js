

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    get product() { return $("(//p[contains(text(),'Sleeveless Unicorn Patch Gown - Pink')]//following::div[@class='choose']/ul/li/a/i)[1]") }
    get logo() { return $("//div[@class='logo pull-left']") }

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async selectProduct () {
        await expect(this.product).toBeDisplayed()
        await this.product.click();
    }

    async validateLogo(){
        await expect(this.logo).toBeDisplayed()
    }

     /**
     * overwrite specific options to adapt it to page object
     */
     open () {
        return super.open('login');
    }
}




export default new HomePage();
