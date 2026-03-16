import { Page, Locator, expect } from '@playwright/test';
import { ShiftsPage } from './ShiftsPage';

export class DashboardPage {
    private readonly page: Page;


    private readonly msgConfirmation: Locator;
    private readonly shifts: Locator;

    constructor(page: Page) {
        this.page = page;

        this.msgConfirmation = page.locator("//div[@class='custom-toast custom-toast-success']");
        this.shifts = page.locator("(//div[@class='flex items-center justify-center'])[3]");

    }

    async getConfirmationMsg(): Promise<string> {
        await this.msgConfirmation.waitFor();
        return (await this.msgConfirmation.textContent()) ?? '';

    }

    async clickOnShifts(): Promise<ShiftsPage> {
        await this.shifts.click();
        return new ShiftsPage(this.page);
    }



}
