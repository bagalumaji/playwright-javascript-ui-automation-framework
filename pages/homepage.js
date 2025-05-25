import { expect } from '@playwright/test';
import {PageAction} from "../pageactions/pageaction";

export class HomePage{
    constructor(page){
        this.page = page;
    }

    async verifyHomePage(){
        await PageAction.waitForElementToBeVisible(this.#getProductTextLocator,15000);
    }

    get #getProductTextLocator(){
        return this.page.getByText("Products");
    }

    async #clickLogoutButton(){
        await this.page.getByRole("link",{name:'Logout'}).click();
    }

    async #clickMenuButton(){
        await this.page.getByRole("button",{name:'Open Menu'}).click();
    }
    async performLogout(){
        await this.#clickMenuButton();
        await this.#clickLogoutButton();
    }
}