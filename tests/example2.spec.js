const { test, expect } = require('@playwright/test');

// Grouping the test
test.describe("Smoke Tests", () => {

    // Skips the test
    test('Simple test click test @regression', async ({ page, browserName }) => {
        await page.goto("/");
        await page.click("text=Add/Remove Elements");
        const locator1 = page.locator("text=Add/Remove Elements");
        // screenshot targets only the locator specified.
        await locator1.screenshot({path:'screenshot2.png'});
        await page.click("text=Add Element");
    });

    test('Duplicate test 1 @smoke', async ({ page }) => {
        await page.goto("/");
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    })

    test('Duplicate test 1 @regression', async ({ page }) => {
        await page.goto("/");
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    });
});