import {expect} from "@playwright/test";

export class PageAction {
    async waitForElementToBeVisible(locator,timeout) {
        await expect(locator).toBeVisible({ timeout:timeout });
        try {
            await locator.scrollIntoViewIfNeeded({ timeout: timeout});
        } catch (error) {
        }
    }
}