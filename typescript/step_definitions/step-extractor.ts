import { ENV_ENUM, TestingEnvironments } from "../base/base-environment";
import { BaseExecutor } from "../base/base-executor";


export function executeSteps(testStepsPath: string) {
    const { env } = new TestingEnvironments(ENV_ENUM.local);

    const runner = new BaseExecutor(env.url)

    runner.executeTest(testStepsPath)

}