// /**
//  * Test Case: Account Registration
//  * 
//  * Tags: @master @sanity @regression
 
//  */

// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import { DashboardPage } from '../pages/DashboardPage';
// import { TestConfig } from '../test.config';

// let loginPage: LoginPage;
// let dashboardPage: DashboardPage;
// let config: TestConfig;

// test.describe('Login Test Suite', () => {

//     test.beforeEach(async ({ page }) => {
//         config = new TestConfig();
//         await page.goto(config.appUrl); //Navigate to application URL 
//         loginPage = new LoginPage(page);
//         dashboardPage = new DashboardPage(page);

//     })

//     // test.afterEach(async ({ page }) => {

//     //     await page.waitForTimeout(3000);
//     //     await page.close();

//     // })


//     test('login Page Logo Verify @master', async ({ page }) => {

//         expect(await loginPage.isNNLogoExists()).toBeTruthy(); //Verify NN Logo exists on login page
//         console.log("Login page logo verification successful");
//     });

//     test('login test @master', async ({ page }) => {

//         // config = new TestConfig();
//       //  await page.goto(config.appUrl); //Navigate to application URL 
//         //  loginPage = new LoginPage(page);

//        // expect(loginPage.isNNLogoExists()).toBeTruthy(); //Verify NN Logo exists on login page
//         await loginPage.setEmail(config.email);
//         await loginPage.setPassword(config.password);
//         await loginPage.clickLogin();

//         //  dashboardPage = new DashboardPage(page);
//         const message = await dashboardPage.getConfirmationMsg();
//         console.log(message);
//         expect(message).toContain('Login Successful');
//         console.log("Login test successful");
//         //  expect(loginPage.getConfirmationMsg()).toContain('Login Successful'); //Verify successful login by checking for "Dashboard" in the confirmation message
        
//     });

// });

import { test, expect, chromium, Browser, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { TestConfig } from '../test.config';
//import ENV from '../config/env';
import ENV from '../config/env';
//import { ENV } from '../config/env';


let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let dashboardPage: DashboardPage;
let config: TestConfig;

test.describe('Login Test Suite', () => {

test.beforeAll(async () => {

    browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
    config = new TestConfig();
   // await page.goto(config.appUrl);
   await page.goto(ENV.baseURL);

    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

});

// test.afterAll(async () => {

//     await browser.close();

// });

test('login Page Logo Verify @master', async () => {

    expect(await loginPage.isNNLogoExists()).toBeTruthy();

});

test('login test @master', async () => {

    await loginPage.setEmail(config.email);
    await loginPage.setPassword(config.password);

    await loginPage.clickLogin();

    const message = await dashboardPage.getConfirmationMsg();

    expect(message).toContain('Login Successful');

});

});