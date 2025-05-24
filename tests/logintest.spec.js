import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/loginpage';
import {HomePage} from '../pages/homepage';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({path:path.resolve(__dirname,'..','.env')});
const baseUrl=process.env.baseURL
const username=process.env.login_username
const password=process.env.login_password

test.beforeEach(async({page})=>{
    await page.goto(baseUrl);
});

test("login test",async({page})=>{
    console.log(baseUrl);
    console.log(username);
    console.log(password);
    console.log("----------------------")

    const loginPage= new LoginPage(page);
    await loginPage.verifyLoginPage();
    await loginPage.performLogin(username,password);

    const homePage = new HomePage(page);
    await homePage.verifyHomePage();
    await homePage.performLogout();

    await loginPage.verifyLoginPage();

});