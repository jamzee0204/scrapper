/* 
    This is the most basic level of web scrapping.
    1. In this will open-up a browser.
    2. Then Navigate to `www.facebook.com`
    3. And, then take a screenshot of the login page and save it in the device.
*/

const puppeteer = require('puppeteer');

(async()=>{
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.facebook.com/')
    await page.screenshot({ path: 'facebook.png', fullPage: true })
    await browser.close()
})()
