import { ENV_ENUM, TestingEnvironments } from "../base/base-environment";
import { TestStep } from "../utils/types.dt";
import { loginPageObjects } from "../page_objects/login-page-objects";

const env = new TestingEnvironments(ENV_ENUM.local).env

export const loginTestSteps: TestStep[] = [
    { selector: loginPageObjects.usernameTextInput, action: 'type', value: env.email },
    { selector: loginPageObjects.passwordTextInput, action: 'type', value: env.password },
    { selector: loginPageObjects.submitButton, action: 'click' },
];