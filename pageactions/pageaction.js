import {expect} from "@playwright/test";
import envtestdata from '../testdata/config.json';

export class PageAction {
    static async waitForElementToBeVisible(locator,timeOut) {
        await expect(locator).toBeVisible({ timeout: timeOut ?? envtestdata.wait.defaultTimeout });
        try {
            await locator.scrollIntoViewIfNeeded({ timeout: timeOut ?? envtestdata.wait.defaultTimeout });
        } catch (error) {
        }
    }

    static async waitForElementToBeNotVisible(locator,timeOut) {
        await expect(locator).not.toBeVisible({ timeout: timeOut ?? envtestdata.wait.defaultTimeout })
    }

    static async click(locator,timeOut){
            await locator.click({ timeout: timeOut ?? envtestdata.wait.defaultTimeout });
    }

    static async fill(locator,text,timeOut) {
        await locator.fill(text,{ timeout: timeOut ?? envtestdata.wait.defaultTimeout })
    }
}