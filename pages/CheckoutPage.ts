import{test,expect} from '@playwright/test';
import{BasePage} from './BasePage';

export class CheckoutPage extends BasePage{
    readonly firstNameInput = this.page.locator('[data-test="firstName"]');
    readonly lastNameInput = this.page.locator('[data-test="lastName"]');
    readonly postalCodeInput = this.page.locator('[data-test="postalCode"]');
    readonly continueButton = this.page.locator('[data-test="continue"]');
    readonly finishButton = this.page.locator('[data-test="finish"]');
    readonly cancelButton = this.page.locator('[data-test="cancel"]');
    readonly errorMessage = this.page.locator('[data-test="error"]');

    async enterCheckoutInformation(firstName: string, lastName: string, postalCode: string):Promise<void>
    {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async clickContinue(): Promise<void>
    {
        await this.continueButton.click();
    }   

    async clickCancel(): Promise<void>
    {
        await this.cancelButton.click();
    }

    

    
    
}