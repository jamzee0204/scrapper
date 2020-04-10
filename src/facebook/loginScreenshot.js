/*
    This will Login into facebook using email/mobile and password :
    1. In this first we will navigate to facebook login page.
    2. Then we will select the form input responsible for login.
    3. Then we will type in our email and password.
    4. And would then click on the login button.
    
    Finally, after the profile page has loaded completely will take a screenshot and store it in local device.
*/

const puppeteer = require('puppeteer');

const email = 'jondoe@abc.com';
const password = 'jondoe@123';

(async()=>{

    // Here we launch puppeteer instance and allow permission to notifications.
    const browser = await puppeteer.launch()
    const context = browser.defaultBrowserContext();
    await context.overridePermissions('https://www.facebook.com', ['notifications']);

    // Here we fire up a new page and navigate to `facebook.com`.
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.facebook.com')
    
    // This part actually handles login and hitting submit after filling details and waits for redirects to complete.
    await page.focus('input[id="email"]')
    await page.keyboard.type(email)
    await page.focus('input[id="pass"]')
    await page.keyboard.type(password)
    await page.click('input[id="u_0_b"]')
    await page.waitForNavigation({waitUntil:'networkidle0'})

    await page.screenshot({ path: 'facebookLogin.png'})
    await browser.close()
})()