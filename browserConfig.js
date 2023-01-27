const puppeteer = require('puppeteer');
async function startBrowser() {
    let browser;

    browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        devtools: false,
        args: [
            `--start-fullscreen`,
            "--window-size=1920,1080"
        ]
    });
    return browser;
}

module.exports = {
    startBrowser
};