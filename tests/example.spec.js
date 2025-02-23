const { expect, test } = require('@playwright/test');

//test('First test', async ({ page }) =>{
//   // Write testing code here
//    await page.goto('https://playwright.dev/');
//    await page.pause();
//});

test('Sipmet test', async ({ page }) =>{
    await page.goto('https://the-internet.herokuapp.com/'); // Go to the website
    const element = page.locator('text=Add/Remove Elements'); // Find the element
    const addElement = page.locator('text=Add Element'); // Find the element
    await element.click(); // Click the element
    await addElement.click(); // Click the element
});