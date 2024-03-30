import { Page, webkit } from 'playwright/test';
import { Actions, baseActions } from '../../depreciated/base-actions';

export class BasePage {
    actions: Actions
    page: Promise<Page>
    constructor(url: string) {
        this.actions = baseActions
        this.page = this.launchPage(url)
    }
    launchPage(url: string): Promise<Page> {
        return webkit.launch({ headless: true }).then(async browser => {
            const page = await browser.newPage();
            await page.goto(url);
            return page
        })
    }

}