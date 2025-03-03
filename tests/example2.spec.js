const { test, expect } = require('@playwright/test');

// Grouping the test
test.describe("Smoke Tests", () => {

    test('First test @smoke', async ({ page }) => {
        // write testing code here
        await page.goto("https://playwright.dev");
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');
    });

    // Skips the test
    test('Simple test click test @regression', async ({ page, browserName }) => {
        test.skip(browserName = 'firefox', 'Working on the firefox fix');
        await page.goto("https://the-internet.herokuapp.com");
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    });

    test('Duplicate test 1 @smoke', async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com");
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    })

    test('Duplicate test 1 @regression', async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com");
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    });
});