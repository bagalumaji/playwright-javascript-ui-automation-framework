import { expect } from '@playwright/test';
export class LoginPage{
    constructor(page){
        this.page =page;
    }
 
    async enterUsername(username){
        await this.page.getByPlaceholder("Username").fill(username);
    }
    async enterPassword(password){
        await this.page.getByPlaceholder("Password").fill(password);
    }
    async clickLoginButton(){
        await this.page.getByRole("button",{name:'Login'}).click();
    }

    async verifyLoginPage(){
        await expect(this.page.getByText("Username")).toBeVisible();
    }

    async performLogin(username,password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}