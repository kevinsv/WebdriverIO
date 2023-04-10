import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputQuantity () { return $('#quantity') }
    get btnAddToCart () { return $('.btn-default') }
    get linkViewCart () { return $("//div[@class='modal-content']//a[@href='/view_cart']") }
    get modalView () {return $('#cartModal')}

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

     /* async sleep(milliseconds) {
         return new Promise(resolve => setTimeout(resolve, milliseconds));
    } */
        
    async clickAddToCart (){
        await expect(this.btnAddToCart).toBeDisplayed()
        await this.btnAddToCart.click()
        await this.linkViewCart.waitForDisplayed({ timeout: 3000 },{ timeoutMsg: 'link to view cart is not displayed' })
    }

     async addProductQuantityToCart (quantity) {
        await expect(this.inputQuantity).toBeDisplayed()
        await this.inputQuantity.setValue(quantity)
        await this.clickAddToCart()
        await this.linkViewCart.click()
    }

}

export default new ProductPage();
