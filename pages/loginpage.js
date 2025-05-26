import {PageAction} from "../pageactions/pageaction";
export class LoginPage{
    constructor(page){
        this.page =page;
    }
 
    async enterUsername(username){
        await PageAction.fill(this.#userNameTextBoxLocator, username,15000);
    }
    async enterPassword(password){
        await PageAction.fill(this.#passwordTextBoxLocator, password,15000);
    }
    async clickLoginButton(){
        await PageAction.click(this.#loginButtonLocator,15000);
    }

    async verifyLoginPage(){
        await PageAction.waitForElementToBeVisible(this.#userNameTextBoxLocator, 15000);
    }

    get #userNameTextBoxLocator(){
        return this.page.getByText("Username");
    }
    get #passwordTextBoxLocator(){
        return this.page.getByPlaceholder("Password");
    }
    get #loginButtonLocator(){
        return this.page.getByRole("button",{name:'Login'});
    }

    async performLogin(username,password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}