import {expect} from "@playwright/test";

export class PageAction {
    static async waitForElementToBeVisible(locator,timeout) {
        await expect(locator).toBeVisible({ timeout:timeout });
        try {
            await locator.scrollIntoViewIfNeeded({ timeout: timeout});
        } catch (error) {
        }
    }

    static async waitForElementToBeNotVisible(locator,timeout) {
        await expect(locator).not.toBeVisible({ timeout: timeout })
    }
    static async click(locator){

    }
}