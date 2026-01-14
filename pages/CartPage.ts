import { BasePage } from "./BasePage"
import { CheckoutPage } from "./CheckoutPage";
import { HomePage } from "./HomePage";



export class CartPage extends BasePage{
    readonly iTemName= this.page.locator('.inventory_item_name');
    readonly shoppingCartLink = this.page.locator('.shopping_cart_link');
    readonly checkoutButton = this.page.locator('[data-test="checkout"]');
    readonly removeButton = this.page.locator('[data-test="remove-sauce-labs-backpack"]');
    readonly continueShoppingButton = this.page.locator('[data-test="continue-shopping"]');
    readonly itemPrice = this.page.locator('.inventory_item_price');
    readonly addToCartButton = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'); 


    async asserItemInCart(): Promise<string>
    {

        await this.shoppingCartLink.click();
        const itemName = await this.iTemName.first().textContent();
        return itemName?.trim() || '';

    }

    

    async goToCheckout(): Promise<CheckoutPage>
    {

       await this.shoppingCartLink.click();
       await this.checkoutButton.click();
       return new CheckoutPage(this.page);
    }

    async continueShopping(): Promise<HomePage>
    {
        await this.continueShoppingButton.click();
        return new HomePage(this.page);
    }
    async removeItemfromCart(): Promise<CartPage>
    {
        await this.removeButton.click();
        return new CartPage(this.page);
    }
}