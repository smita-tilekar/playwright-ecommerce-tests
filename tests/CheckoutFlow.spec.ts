import{test,expect}from'@playwright/test';
import { appConfig } from '../utils/config';
import { LoginPage } from '../pages/loginPage';
import { CartPage } from '../pages/CartPage';  
import { HomePage } from '../pages/HomePage';
import { CheckoutPage } from '../pages/CheckoutPage';






test.beforeEach(async({page})=>{ 
    await page. goto(appConfig.baseUrl);
    const loginPage=new LoginPage(page);
    await loginPage.login('standard_user','secret_sauce');
    
});

test.describe('Checkout Flow Test',()=>{

    test('Verify Checkout Information with valid data',async({page})=>{

        const Homepage=new HomePage(page);
        const cartpage= new CartPage(page);
        const checkoutpage=new CheckoutPage(page);
        const cartPageItem= await Homepage.addToCart();

       expect(await cartpage.asserItemInCart()).toBe('Sauce Labs Backpack');

       await cartpage.goToCheckout();
        await checkoutpage.enterCheckoutInformation('John','Doe','12345');
        await checkoutpage.clickContinue();

        expect(page.url()).toBe(`${appConfig.baseUrl}checkout-step-two.html`);


    });
    test('cancel order and return to the page',async({page})=>{

        const cartpage=new CartPage(page);
        const checkoutpage=new CheckoutPage(page);
        const Homepage=new HomePage(page);
        const cartPageItem= await Homepage.addToCart();

         await cartpage.goToCheckout();
        await checkoutpage.enterCheckoutInformation('John','Doe','12345');
        await checkoutpage.clickCancel();

        expect(page.url()).toBe(`${appConfig.baseUrl}cart.html`);


    }); 
    })