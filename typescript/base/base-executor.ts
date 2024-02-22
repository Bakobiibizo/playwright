import { test } from '@playwright/test';
import { BasePage } from './base-page';
import * as fs from 'fs';


export class BaseExecutor extends BasePage {
    extractedSteps: any
    searchString: string
    constructor(url: string) {
        super(url)
        this.searchString = 'await'
    }
    testExtractor(testStepsPath: string): string[] {

        const test_data = fs.readFileSync(testStepsPath, 'utf-8')

        const lines: string[] = test_data.toString().split('\n')

        const steps = []

        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(this.searchString)) {
                console.log(lines[i])
            }
            if (lines[i].includes(this.searchString)) {
                steps.push(lines[i])
                console.log(`${i} ${lines[i]}`)
            }
        }
        this.extractedSteps = steps
        return this.extractedSteps
    }
    async executeAction(step: string) {
        await this.extractedSteps.evaluate(step)
    }
    async executeTest(testSteps: string) {
        const steps = await this.testExtractor(testSteps)

        for (let i = 0; i < steps.length; i++) {
            await this.executeAction(steps[i])
        }

    }
}
