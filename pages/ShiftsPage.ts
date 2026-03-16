import { Page, expect, Locator } from '@playwright/test';
import { DashboardPage } from './DashboardPage';
import { LoginPage } from './LoginPage';

export class ShiftsPage {
    private readonly page: Page;

    // Locators
        private readonly ShiftsHeader: Locator;



    constructor(page: Page) {
        this.page = page;

        // Initialize locators
       
        this.ShiftsHeader = page.locator("//p[contains(@class,'p-1 pl-2 first-letter:uppercase text-neutral-secondary font-medium whitespace-nowrap truncate')]");
    }

    // shiftsPage.ts

async getHeaderText(): Promise<string> {
    return (await this.ShiftsHeader.textContent()) ?? '';
}


}