import {PageAction} from "../pageactions/pageaction";
import config from "../testdata/config.json";
export class HomePage{
    constructor(page){
        this.page = page;
    }

    async verifyHomePage(){
        await PageAction.waitForElementToBeVisible(this.#getProductTextLocator);
    }

    async #clickLogoutButton(){
        await PageAction.click(this.#logoutButtonLocator,config.wait.minimumTimeout);
    }

    async #clickMenuButton(){
        await PageAction.click(this.#openMenuButtonLocator,config.wait.minimumTimeout);
    }
    get #openMenuButtonLocator(){
        return this.page.getByRole("button",{name:'Open Menu'});
    }
    get #getProductTextLocator(){
        return this.page.getByText("Products");
    }
    get #logoutButtonLocator(){
        return this.page.getByRole("link",{name:'Logout'});
    }

    async performLogout(){
        await this.#clickMenuButton();
        await this.#clickLogoutButton();
    }
}