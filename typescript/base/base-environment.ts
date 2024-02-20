import * as dotenv from 'dotenv';

dotenv.config();

export class TestingEnv {
    [key: string]: any
    constructor(public url: string, public email: string, public password: string) { }
    SetEnvironmentVariable(key: string, value: any) {
        this[key].setItem(value)
    }
    GetEnvironmentVariable(key: string) {
        return this[key]
    }
}

export class LocalEnvironment extends TestingEnv {
    constructor() {
        super(
            process.env['MOL_LOCAL_URL']!,
            process.env['MOL_LOCAL_EMAIL']!,
            process.env['MOL_LOCAL_PASSWORD']!
        );
    }
}

export class TestEnvironment extends TestingEnv {
    constructor() {
        super(
            process.env['MOL_TEST_URL']!,
            process.env['MOL_TEST_EMAIL']!,
            process.env['MOL_TEST_PASSWORD']!
        );
    }
}

export class DevEnvironment extends TestingEnv {
    constructor() {
        super(
            process.env['MOL_DEV_URL']!,
            process.env['MOL_DEV_EMAIL']!,
            process.env['MOL_DEV_PASSWORD']!
        );
    }
}

export class StageEnvironment extends TestingEnv {
    constructor() {
        super(
            process.env['MOL_STAGE_URL']!,
            process.env['MOL_STAGE_EMAIL']!,
            process.env['MOL_STAGE_PASSWORD']!
        );
    }
}

export class UATEnvironment extends TestingEnv {
    constructor() {
        super(
            process.env['MOL_UAT_URL']!,
            process.env['MOL_UAT_EMAIL']!,
            process.env['MOL_UAT_PASSWORD']!
        );
    }
}

export class ProdEnvironment extends TestingEnv {
    constructor() {
        super(
            process.env['MOL_PROD_URL']!,
            process.env['MOL_PROD_EMAIL']!,
            process.env['MOL_PROD_PASSWORD']!
        );
    }
}

export enum ENV_ENUM {
    'local',
    'test',
    'dev',
    'stage',
    'uat',
    'prod'
}

export class TestingEnvironments {
    local: LocalEnvironment;
    test: TestEnvironment;
    dev: DevEnvironment;
    stage: StageEnvironment;
    uat: UATEnvironment;
    prod: ProdEnvironment;
    env: TestingEnv;

    constructor(environment: ENV_ENUM) {
        this.local = new LocalEnvironment();
        this.test = new TestEnvironment();
        this.dev = new DevEnvironment();
        this.stage = new StageEnvironment();
        this.uat = new UATEnvironment();
        this.prod = new ProdEnvironment();
        this.env = this.getEnvironment(environment);
    }

    getEnvironment(environment: ENV_ENUM.dev | ENV_ENUM.test | ENV_ENUM.stage | ENV_ENUM.uat | ENV_ENUM.prod | ENV_ENUM.local): TestingEnv {
        switch (environment) {
            case ENV_ENUM.local:
                return this.local;
            case ENV_ENUM.test:
                return this.test;
            case ENV_ENUM.dev:
                return this.dev;
            case ENV_ENUM.stage:
                return this.stage;
            case ENV_ENUM.uat:
                return this.uat;
            case ENV_ENUM.prod:
                return this.prod;
            default:
                return this.local;
        }
    }

}
