const { test, expect } = require('@playwright/test');

// Grouping the test
test.describe("Smoke Tests", () => {

    // beforeEach Hook - travels to the specified page first
    test.beforeEach(async ({page})=>{
        await page.goto("/");
    });

    // afterEach hook
    test.afterEach(async ({page})=>{
        console.log("This test finished.")
    })

    // Skips the test
    test('Simple test click test @regression', async ({ page, browserName }) => {
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    });

    test('Duplicate test 1 @smoke', async ({ page }) => {
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    })

    test('Duplicate test 1 @regression', async ({ page }) => {
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    });
});