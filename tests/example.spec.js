const { expect, test } = require('@playwright/test');

test('First test', async ({ page }) =>{
    // Write testing code here
    await page.goto('https://playwright.dev/');
    await page.pause();
})