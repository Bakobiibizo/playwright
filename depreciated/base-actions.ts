import { Page } from 'playwright/test';

export type Options = {
    force?: boolean | undefined,
    modifiers?: ("Alt" | "Control" | "Meta" | "Shift")[] | undefined,
    noWaitAfter?: boolean | undefined,
    position?: {
        x: number,
        y: number,
    } | undefined,
    strict?: boolean | undefined,
    timeout?: number | undefined,
    trial?: boolean | undefined,
}
export type ActionFunction = (page: Page, selector: string, value: string, options?: Options) => Promise<void>;

export type Actions = {
    [key: string]: ActionFunction;
};


export const baseActions: Actions = {
    fill: async (page, selector, text) => await page.fill(selector, text),

    type: async (page, selector, text) => await page.fill(selector, text),

    key: async (page, selector, key) => await page.press(selector, key),

    ticBox: async (page, selector) => await page.check(selector),

    selectOption: async (page, selector, args, options?: Options) => await page.check(selector, options),

    click: async (page, selector) => await page.click(selector),

    dblclick: async (page, selector) => await page.dblclick(selector),

    hover: async (page, selector) => await page.hover(selector),

    setInputFiles: async (page, selector, filepath) => await page.setInputFiles(selector, filepath),

    focus: async (page, selector) => await page.focus(selector)
};
