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
            try {
                if (lines[i].includes(this.searchString)) {
                    steps.push(lines[i])
                }
            } catch (error) {
                console.log(lines[i])
                console.log(error)
            }
        }
        this.extractedSteps = steps
        return this.extractedSteps
    }
    async executeAction(step: string) {
        try {
            const actionArray: string[] = step.split('.')
            const action: string = actionArray[1]
            const selector: string = actionArray[2].replace('(', '').replace(')', '')

            if (actionArray[3]) {
                actionArray[3] = actionArray[3].replace('(', '').replace(')', '')
            }

            await this.actions[action](await this.page, selector, actionArray[3])
        } catch (error) {
            console.log(error)
        }
    }
    async executeTest(testSteps: string) {
        const steps = await this.testExtractor(testSteps)

        for (let i = 0; i < steps.length; i++) {
            await this.executeAction(steps[i])
        }

    }
}
