import { Page } from 'playwright/test';
import { Actions, baseActions, Options, type ActionFunction } from './base-actions'


export class BasePage {
    actions: Actions
    constructor(protected page: Page) {
        this.actions = baseActions
    }
    getAction(actionName: string): ActionFunction {
        return this.actions[actionName]
    }
}