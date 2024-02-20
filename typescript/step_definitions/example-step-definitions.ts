import { ENV_ENUM, TestingEnvironments } from "../base/base-environment";
import { TestStep } from "../utils/types.dt";
import { theRoostPageObjects } from "../page_objects/example-page-objects";

const env = new TestingEnvironments(ENV_ENUM.local).env

export const theRoostTestSteps: TestStep[] = [
    { selector: theRoostPageObjects.authorizeButton, action: 'click', value: 'Authorize' },
    { selector: theRoostPageObjects.textbox, action: 'type', value: 'sk-1234' },
    { selector: theRoostPageObjects.textbox, action: 'type', value: 'Enter' }
]
