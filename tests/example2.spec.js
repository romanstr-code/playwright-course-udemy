const { test, expect } = require('@playwright/test');

test('First test', async ({ page }) =>{
    // write testing code here
    await page.goto("https://playwright.dev");
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
});

// Skips the test
test.skip('Simple test click test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com");
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");
});

test('Duplicate test', async ({ page })=> {
    await page.goto("https://the-internet.herokuapp.com");
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");
})