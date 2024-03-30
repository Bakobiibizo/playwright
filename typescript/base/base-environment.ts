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
            process.env['LOCAL_URL']!,
            process.env['LOCAL_EMAIL']!,
            process.env['LOCAL_PASSWORD']!
        );
    }
}

export class StageEnvironment extends TestingEnv {
    constructor() {
        super(
            process.env['STAGE_URL']!,
            process.env['STAGE_EMAIL']!,
            process.env['STAGE_PASSWORD']!
        );
    }
}


export class ProdEnvironment extends TestingEnv {
    constructor() {
        super(
            process.env['PROD_URL']!,
            process.env['PROD_EMAIL']!,
            process.env['PROD_PASSWORD']!
        );
    }
}

export enum ENV_ENUM {
    'local',
    'stage',
    'prod'
}

export class TestingEnvironments {
    local: LocalEnvironment;
    stage: StageEnvironment;
    prod: ProdEnvironment;
    env: TestingEnv;

    constructor(environment: ENV_ENUM) {
        this.local = new LocalEnvironment();
        this.stage = new StageEnvironment();
        this.prod = new ProdEnvironment();
        this.env = this.getEnvironment(environment);
    }

    getEnvironment(environment: | ENV_ENUM.stage | ENV_ENUM.prod | ENV_ENUM.local): TestingEnv {
        switch (environment) {
            case ENV_ENUM.local:
                return this.local;
            case ENV_ENUM.stage:
                return this.stage;
            case ENV_ENUM.prod:
                return this.prod;
            default:
                return this.local;
        }
    }

}
