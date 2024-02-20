import { ENV_ENUM, TestingEnvironments } from "../base/base-environment";
import { Page } from "@playwright/test";

const env = new TestingEnvironments(ENV_ENUM.local).env;

export async function State(page: Page) {

    const sessionStorage = await page.evaluate<string>("() => JSON.stringify(sessionStorage)");
    env.SetEnvironmentVariable("SESSION_STORAGE", sessionStorage);

    const loadedSessionStorage = env.GetEnvironmentVariable("SESSION_STORAGE");
    await page.addInitScript(@"(stroage=> { if (window.location.hostname === 'example.com') { const entries = JSON.parse(storage); for (const[key, value] of Object.entries(entries)){ window.sessionStorage.setItem(key,Value); } } })('" + loadedSessionStorage + "')");
}