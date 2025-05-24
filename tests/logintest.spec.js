import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/loginpage';
import {HomePage} from '../pages/homepage';

test.beforeEach(async({page})=>{
    await page.goto("/");
});

test("login test",async({page})=>{
   
    const loginPage= new LoginPage(page);
    await loginPage.verifyLoginPage();
    await loginPage.performLogin("standard_user","secret_sauce");

    const homePage = new HomePage(page);
    await homePage.verifyHomePage();
    await homePage.performLogout();

    await loginPage.verifyLoginPage();

});