import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import ProductPage from '../pageobjects/product.page.js'
import cartPage from '../pageobjects/cart.page.js'
import signupPage from '../pageobjects/signup.page.js'
import headermenuPage from '../pageobjects/headermenu.page.js'
import checkoutPage from '../pageobjects/checkout.page.js'
import paymentPage from '../pageobjects/payment.page.js'
import contactUsPage from '../pageobjects/contactUs.page.js'

describe('My  application', () => {
    it('User Flow', async () => {
        let number = Math.random() * 1000;

        await HomePage.open()
        await HomePage.validateLogo()
        await HomePage.selectProduct()
        await ProductPage.addProductQuantityToCart(30)
        await cartPage.clickProceedToCheckout()
        await cartPage.clickRegisterAndLogin()
        await LoginPage.signup('Kevin', 'webdriverio-19' + number + '@yopmail.com')
        await signupPage.createAccountInformation()
        await signupPage.clickContinueInAccountCreated()
        await headermenuPage.clickCart()
        await cartPage.clickProceedToCheckout()
        await checkoutPage.placeOrder('Comment is here')
        await paymentPage.FillCreditCardInformationAndPay('Kevin Salgado', '4929794114702374','945', '5','2022')
        await paymentPage.clickContinue()
        await headermenuPage.clickLogout()
        await headermenuPage.clickLogin()
        await LoginPage.login('webdriverio-19' + number + '@yopmail.com' , 'webdriverIOTest01')
        await headermenuPage.clickContactUs()
        await contactUsPage.completeContactUs('Test','webdriverio-19' + number + '@yopmail.com','subject test','message test')
        HomePage.browserAcceptAlert()
    })
})


