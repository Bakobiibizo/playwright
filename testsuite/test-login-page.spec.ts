// @ts-check

import { test } from '@playwright/test'
import { executeSteps } from '../typescript/step_definitions/step-extractor';

test.describe('login page', () => {
    test('you login', () => {
        executeSteps('D:/playwright/engine - Copy/typescript/step_definitions/test.txt')
    })
})