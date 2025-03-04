// Import the PlaywrightTestConfig type from the Playwright test module
const { PlaywrightTestConfig } = require('@playwright/test');

// Define the Playwright configuration object
const config = {
    // Set the number of retries for failed tests (1 retry in case of failure)
    retries: 1,

    // Set the global timeout for each test in milliseconds (60 seconds)
    timeout: 60000,

    // Define settings that apply to all test executions
    use: {
        baseURL: "https://the-internet.herokuapp.com/",
        // Run tests in headed mode (set to false to see the browser UI during tests)
        headless: false,

        // Set the default viewport size for the browser window
        viewport: { width: 1280, height: 720 },

        // Disable video recording of test execution
        video: "off",

        // Disable automatic screenshot capture on test failure
        screenshot: "off"
    },

    // Define multiple projects to run tests in different browsers
    projects: [
        {
            // Define a project for running tests in Chromium (Google Chrome)
            name: 'Chrome',
            use: { browserName: 'chromium' }
        },
        {
            // Define a project for running tests in Mozilla Firefox
            name: 'Firefox',
            use: { browserName: 'firefox' }
        },
        {
            // Define a project for running tests in WebKit (Safari engine)
            name: 'Webkit',
            use: { browserName: 'webkit' }
        },
    ]
}

// Export the config object so it can be used by Playwright
module.exports = config;
