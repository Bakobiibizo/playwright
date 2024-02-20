import { Page } from '@playwright/test'
import { BasePage } from './base-page';
import { Options } from './base-actions';

export class BaseExecutor extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    async executeAction(actionName: string, page: Page, selector: string, value: string, options?: Options) {
        await this.getAction(actionName)(page, selector, value);
    }
}
