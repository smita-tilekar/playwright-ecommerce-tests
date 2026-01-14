import { LoginPage} from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { test, expect } from "@playwright/test";
import { appConfig } from "../utils/config";
let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    await page.goto(appConfig.baseUrl);
    loginPage=new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    homePage=new HomePage(page);
    
});

test.describe("Home Page Test", () => {

   /* test("Verify Add to Cart functionality",async({page})=>{
        homePage=new HomePage(page);
        const cartPage= await homePage.addToCart('Sauce Labs Backpack');
    }); */

    test("Sort items by Price Low to High", async ({ page }) => {
        await homePage.sortItems('lohi');
        const prices = await homePage.getAllItemPrices();
        expect(prices[0]).toBe(7.99);
        expect([...prices].sort((a, b) => a - b)).toEqual(prices);

        

    });
    test("Sort items by Price High to Low", async ({ page }) => {

        await homePage.sortItems('hilo');
        const prices = await homePage.getAllItemPrices();
        expect(prices[0]).toBe(49.99);  
        expect([...prices].sort((a, b) => b - a)).toEqual(prices);

    });

    test("Logout User from application", async ({ page }) => {

        await homePage.logoutUser();
        await expect(loginPage.loginButton).toBeVisible();

    });


    



    });