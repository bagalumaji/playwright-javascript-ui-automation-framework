import {PageAction} from "../pageactions/pageaction";

export class HomePage{
    constructor(page){
        this.page = page;
    }

    async verifyHomePage(){
        await PageAction.waitForElementToBeVisible(this.#getProductTextLocator,15000);
    }

    async #clickLogoutButton(){
        await PageAction.click(this.#logoutButtonLocator,15000);
    }

    async #clickMenuButton(){
        await PageAction.click(this.#openMenuButtonLocator,15000);
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