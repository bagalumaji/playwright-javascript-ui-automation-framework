import {expect} from "@playwright/test";
import envtestdata from '../testdata/config.json';

export class PageAction {
    static async waitForElementToBeVisible(locator, timeOut) {
        await expect(locator).toBeVisible(this.#getTimeout(timeOut));
        try {
            await locator.scrollIntoViewIfNeeded(this.#getTimeout(timeOut));
        } catch (error) {
        }
    }

    static async waitForElementToBeNotVisible(locator, timeOut) {
        await expect(locator).not.toBeVisible(this.#getTimeout(timeOut))
    }

    static async click(locator, timeOut) {
        await locator.click(this.#getTimeout(timeOut));
    }

    static async fill(locator, text, timeOut) {
        await locator.fill(text, this.#getTimeout(timeOut));
    }

    static #getTimeout(timeOut) {
        return {timeout: timeOut ?? envtestdata.wait.defaultTimeout};
    }
}