import {test,expect} from '@playwright/test';
import{LoginPage} from '../pages/loginPage';
import {HomePage} from '../pages/HomePage';  // syntax to return module
import userLoginData from '../testdata/users.json'; // syntax to import json file
import {appConfig} from '../utils/config';

let loginPage:LoginPage;
let homePage:HomePage;  


test.beforeEach(async ({page}) =>{

    await page.goto(appConfig.baseUrl);
    loginPage=new LoginPage(page);

})

test.describe('Login Page Test-Data Driven Tests', ()=>{

 test('Login Tests with multiple users', async ({page})=>{
    for(const user of userLoginData){
        await page.goto(appConfig.baseUrl);
        if(user.shouldPass===true){
            console.log('Successful login :',user.username);
            homePage= await loginPage.login(user.username,user.password);
            const title=await homePage.getPageTitle();
            expect(title).toBe('Products');
            
        }
        else

            
        {

            console.log('Unsuccessful login :',user.username);
            await loginPage.login(user.username,user.password);
            const errorMsg=await loginPage.getErrorMessage();
            expect(errorMsg).toBe(user.errorMessage);
        }
    }


 })

});

