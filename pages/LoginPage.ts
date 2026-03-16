import { Page, expect, Locator } from '@playwright/test';
import { DashboardPage } from './DashboardPage';

export class LoginPage {
    private readonly page: Page;

    // Locators
    private readonly NNLogo: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly submitButton: Locator;
    // private readonly msgConfirmation: Locator;


    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.NNLogo = page.locator('//img[@alt="Logo"]');
        this.emailInput = page.locator('//input[@id="email"]');
        this.passwordInput = page.locator('//input[@id="password"]');
        this.submitButton = page.locator('//button[@type="submit"]');
        //this.msgConfirmation = page.locator("//div[@class='custom-toast custom-toast-success']");
    }

    // Check if NNLogo exists
    async isNNLogoExists() {
        let title: string = await this.page.title();
        if (title) {
            return true;
        }
        return false;
    }

    /**
     * Sets the first name in the registration form
     * @param email - First name to enter
     */
    async setEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    /**
     * Sets the last name in the registration form
     * @param password - Last name to enter
     */
    async setPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    // Click "Login" link


    async clickLogin(): Promise<DashboardPage> {
        await this.submitButton.click();
        return new DashboardPage(this.page);
    }

    async login(email: string, password: string) {
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickLogin();
    }

    // async clickLogin(){
    //     try {
    //         await this.submitButton.click();
    //     } catch (error) {
    //         console.log(`Exception occurred while clicking 'Login': ${error}`);
    //         throw error;
    //     }
    // }


}