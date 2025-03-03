const {PlaywrightTestConfig} = require('@playwright/test');

const config = {
    retries: 1, 
    timeout: 60000,
    use: {
        headless: false,
        viewport: {width: 1280, height: 720},
        video: "off",
        screenshot: "off"
    },

    projects: [
        {
            name: 'Chrome',
            use: {browsername: 'chromium'}
        },
        {
            name: 'Firefox',
            use: {browsername: 'firefox'}
        },
        {
            name: 'Webkit',
            use: {browsername: 'Webkit'}
        },
    ]
}

module.exports = config;