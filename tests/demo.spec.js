import { test, expect } from '@playwright/test';
test('demo test', async ({ page }) => {
    await page.goto('https://google.com');
});