// @ts-check

import { test } from '@playwright/test'
import { executeSteps } from '../typescript/step_definitions/step-extractor';

const pathToStepDefinitions = 'typescript/step_definitions/test.txt'

test.describe('test page', () => {
    test('run the test', () => {
        executeSteps(pathToStepDefinitions)
    })
})
