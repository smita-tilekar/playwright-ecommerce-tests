import {Locator,Page, Expect} from '@playwright/test';
import { BasePage } from './BasePage';
import {CartPage} from './CartPage';
import { appConfig } from '../utils/config';



export class HomePage extends BasePage{

   readonly pageTitle = this.page.locator('text=Products');
   readonly menuButton = this.page.locator('#react-burger-menu-btn');
   readonly logoutButton = this.page.locator('#logout_sidebar_link');
   readonly sortDropdown = this.page.locator('.product_sort_container');
   readonly itemPrice = this.page.locator('.inventory_item_price');
   readonly goToCart = this.page.locator('.shopping_cart_link');
   readonly itemList = this.page.locator('.inventory_item_name ');
   readonly addToCartButton = this.page.getByRole('button', { name: 'Add to cart' });

   async  getPageTitle(): Promise<string>
    {
        const text=await this.pageTitle.textContent();
        return text?.trim() || '';
    }
    /* async addToCart(productName:string): Promise<CartPage>
     {
        await this.addToCartButton.click();
        return new CartPage(this.page);
     }
*/
    

     async getAllItemPrices(): Promise<number[]>
     {
        const texts = await this.itemPrice.allTextContents();
        return texts
            .map(text => text.trim())
            .map(text => parseFloat(text.replace(/[^0-9.]/g, '')));
     }

     async sortItems(order: 'az' | 'za' | 'lohi' | 'hilo')
     {
      await this.sortDropdown.waitFor({ state: 'visible' });
      await this.sortDropdown.selectOption(order);  
     }  

     async logoutUser(): Promise<void>
     {
        await this.menuButton.click();
        await this.logoutButton.waitFor({ state: 'visible' });
        await this.logoutButton.click();
       
     }

     async addToCart(): Promise<CartPage>
     {
      await this.itemList.first().click();
      await this.addToCartButton.click();
      return new CartPage(this.page);

     }

    

}
