import { expect } from '@playwright/test';

export class HomePage{
    constructor(page){
        this.page = page;
    }

    async verifyHomePage(){
        await expect(this.page.getByText("Products")).toBeVisible();
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