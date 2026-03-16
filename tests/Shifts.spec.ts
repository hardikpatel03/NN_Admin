
import { test, expect, chromium, Browser, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ShiftsPage } from '../pages/ShiftsPage';
import { DashboardPage } from '../pages/DashboardPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let dashboardPage: DashboardPage;
let shiftsPage: ShiftsPage;
let config: TestConfig;

test.describe('Login Test Suite', () => {

    test.beforeEach(async ({ page }) => {
        browser = await chromium.launch();
        const context = await browser.newContext();
        page = await context.newPage();
        config = new TestConfig();
        await page.goto(config.appUrl); //Navigate to application URL 
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        shiftsPage = new ShiftsPage(page);
        await loginPage.setEmail(config.email);
        await loginPage.setPassword(config.password);
        await loginPage.clickLogin();
        await dashboardPage.clickOnShifts(); //shiftsPage = await dashboardPage.clickOnShifts(); //Navigate to Shifts page 

    })

    // test.afterEach(async ({ page }) => {

    //     await page.waitForTimeout(3000);
    //     await page.close();

    // })


    test('verify shifts header text @master', async ({ page }) => {

        expect(await shiftsPage.getHeaderText()).toBeTruthy(); //Verify shifts header text
        expect(await shiftsPage.getHeaderText()).toContain('Shifts'); //Verify shifts header text contains "Shifts"
    });

});