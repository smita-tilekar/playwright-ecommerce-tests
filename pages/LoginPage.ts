import{expect, Locator,Page} from '@playwright/test';
import {BasePage} from './BasePage';
import {HomePage} from './HomePage';

export class LoginPage extends BasePage{

  readonly usernameInput = this.page.getByPlaceholder('Username')
  readonly passwordInput = this.page.getByPlaceholder('Password')
  readonly loginButton = this.page.locator('[data-test="login-button"]')
  readonly errorMessage = this.page.locator('[data-test="error"]')

    async login(username:string, password:string): Promise<HomePage>
    {
      //  await expect(this.usernameInput).toBeVisible();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
        return new HomePage(this.page);
        
    }

    //check for error message when login fails

    async getErrorMessage(): Promise<string>
    {

       const errorText = await this.errorMessage.textContent();
       return errorText ?.trim() || '';
    }

    // verify home page is loaded after login

    async verifyLoginSuccess(): Promise<string>
    {

        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
        return this.page.url();


    }

}