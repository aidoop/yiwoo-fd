"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedInsertScenarios1614738600506 = void 0;
const typeorm_1 = require("typeorm");
const shell_1 = require("@things-factory/shell");
const integration_base_1 = require("@things-factory/integration-base");
const SEED = [
    {
        "id": "6199d4e3-b7ab-4b93-8eb2-6ccdb924e3f8",
        "name": "TESTCASE01",
        "description": "TestCase01 결과 불러오기",
        "active": null,
        "schedule": null,
        "timezone": null,
        "created_at": "2021-02-09T15:15:36.662Z",
        "updated_at": "2021-02-21T20:45:40.612Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "type": "master"
    },
    {
        "id": "35d96d12-40e1-4ea5-8e11-6eabbf5922ea",
        "name": "TESTCASE02",
        "description": "TestCase02 결과 불러오기",
        "active": false,
        "schedule": null,
        "timezone": null,
        "created_at": "2021-02-09T22:10:42.499Z",
        "updated_at": "2021-02-21T20:45:40.635Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "type": "master"
    },
    {
        "id": "f56c039f-f810-49c8-bf7a-161c155c4120",
        "name": "TESTCASE03",
        "description": "TestCase03 결과 불러오기",
        "active": false,
        "schedule": null,
        "timezone": null,
        "created_at": "2021-02-09T22:10:52.657Z",
        "updated_at": "2021-02-21T20:45:40.652Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "type": "master"
    },
    {
        "id": "7e4a59ce-21d5-4fd7-a65c-00baa27abc3b",
        "name": "TESTCASE_HISTORY",
        "description": "Test Histories 불러오기",
        "active": null,
        "schedule": null,
        "timezone": null,
        "created_at": "2021-02-15T19:08:48.404Z",
        "updated_at": "2021-02-21T20:46:13.580Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "type": "master"
    },
    {
        "id": "d3a68731-b3dd-4608-85bb-c4753bf7d1db",
        "name": "START_TEST1",
        "description": "TestCase01 Test 시작 및 결과 저장",
        "active": false,
        "schedule": null,
        "timezone": null,
        "created_at": "2021-02-07T21:08:35.950Z",
        "updated_at": "2021-02-21T20:47:55.162Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "type": "prediction"
    },
    {
        "id": "91d4f64a-44da-4a40-9d8e-5279397108bb",
        "name": "START_TEST2",
        "description": "TestCase02 Test 시작 및 결과 저장",
        "active": false,
        "schedule": null,
        "timezone": null,
        "created_at": "2021-02-09T22:28:41.773Z",
        "updated_at": "2021-02-21T20:47:55.179Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "type": "prediction"
    },
    {
        "id": "a7517c62-f4d8-4d72-97cd-59f00e54dbbe",
        "name": "START_TEST3",
        "description": "TestCase03 Test 시작 및 결과 저장",
        "active": false,
        "schedule": null,
        "timezone": null,
        "created_at": "2021-02-09T22:28:46.093Z",
        "updated_at": "2021-02-21T20:47:55.200Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "type": "prediction"
    },
    {
        "id": "873324b5-07b7-43b7-9ff6-6533c80baa41",
        "name": "CLEAR_TEST2_HISTORY",
        "description": "TestCase02 직전 결과 삭제",
        "active": null,
        "schedule": null,
        "timezone": null,
        "created_at": "2021-02-14T15:45:10.074Z",
        "updated_at": "2021-02-21T20:49:29.681Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "type": "preprocess"
    },
    {
        "id": "6970aab0-f2f9-4886-a69b-b7a4a6b7afb1",
        "name": "CLEAR_TEST3_HISTORY",
        "description": "TestCase03 직전 결과 삭제",
        "active": false,
        "schedule": null,
        "timezone": null,
        "created_at": "2021-02-14T19:26:37.109Z",
        "updated_at": "2021-02-21T20:49:29.699Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "type": "preprocess"
    },
    {
        "id": "4356cd57-83ab-4f12-8595-a243a508766e",
        "name": "STOP_TEST1",
        "description": "TestCase01 Test 중단",
        "active": null,
        "schedule": null,
        "timezone": null,
        "created_at": "2021-02-09T21:36:31.146Z",
        "updated_at": "2021-02-21T20:49:29.721Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "type": "prediction"
    },
    {
        "id": "cffde195-a493-40ab-8fc2-1946544bc20c",
        "name": "STOP_TEST2",
        "description": "TestCase02 Test 중단",
        "active": false,
        "schedule": null,
        "timezone": null,
        "created_at": "2021-02-09T21:42:51.998Z",
        "updated_at": "2021-02-21T20:49:29.741Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "type": "prediction"
    },
    {
        "id": "d791b50b-6566-4c6f-908b-88d00a08ec7c",
        "name": "STOP_TEST3",
        "description": "TestCase03 Test 중단",
        "active": false,
        "schedule": null,
        "timezone": null,
        "created_at": "2021-02-09T21:42:47.528Z",
        "updated_at": "2021-02-21T20:49:29.764Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "type": "prediction"
    }
];
class SeedInsertScenarios1614738600506 {
    async up(queryRunner) {
        const repository = typeorm_1.getRepository(integration_base_1.Scenario);
        const domain = await typeorm_1.getRepository(shell_1.Domain).findOne({
            name: 'SYSTEM'
        });
        return await Promise.all(SEED.map(async (scenario) => {
            await repository.save(Object.assign(Object.assign({}, scenario), { domain }));
        }));
    }
    async down(queryRunner) {
        const repository = typeorm_1.getRepository(integration_base_1.Scenario);
        const domain = await typeorm_1.getRepository(shell_1.Domain).findOne({
            name: 'SYSTEM'
        });
        return await Promise.all(SEED.reverse().map(async (scenario) => {
            await repository.delete({ name: scenario.name, domain });
        }));
    }
}
exports.SeedInsertScenarios1614738600506 = SeedInsertScenarios1614738600506;
//# sourceMappingURL=1614738600506-SeedInsertScenarios.js.map