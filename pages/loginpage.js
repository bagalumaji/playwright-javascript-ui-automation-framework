import {PageAction} from "../pageactions/pageaction";
import config from "../testdata/config.json";
export class LoginPage{
    constructor(page){
        this.page =page;
    }
 
    async enterUsername(username){
        await PageAction.fill(this.#userNameTextBoxLocator, username,config.wait.minimumTimeout);
    }
    async enterPassword(password){
        await PageAction.fill(this.#passwordTextBoxLocator, password,config.wait.minimumTimeout);
    }
    async clickLoginButton(){
        await PageAction.click(this.#loginButtonLocator,config.wait.minimumTimeout);
    }

    async verifyLoginPage(){
        await PageAction.waitForElementToBeVisible(this.#userNameTextBoxLocator);
    }

    get #userNameTextBoxLocator(){
        return this.page.getByRole("textbox",{name:"Username"});
    }
    get #passwordTextBoxLocator(){
        return this.page.getByRole("textbox",{name:"Password"});
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