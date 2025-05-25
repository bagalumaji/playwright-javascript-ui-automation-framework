import {PageAction} from "../pageactions/pageaction";
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
        await PageAction.waitForElementToBeVisible(this.#userNameLocator, 15000);
    }

    get #userNameLocator(){
        return this.page.getByText("Username");
    }

    async performLogin(username,password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}