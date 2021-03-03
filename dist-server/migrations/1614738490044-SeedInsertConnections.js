"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedInsertConnections1614738490044 = void 0;
const typeorm_1 = require("typeorm");
const shell_1 = require("@things-factory/shell");
const integration_base_1 = require("@things-factory/integration-base");
const SEED = [
    {
        "id": "151b8a40-3609-4ede-a4a6-4760465471b4",
        "name": "ws_py",
        "description": null,
        "type": "ml-ws-connector",
        "endpoint": "localhost:32000",
        "active": true,
        "params": null,
        "created_at": "2021-02-21T22:02:11.569Z",
        "updated_at": "2021-02-21T22:02:11.569Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91"
    },
    {
        "id": "aadbdc97-f9c5-4b53-a0c8-7ed2a96dd325",
        "name": "python3",
        "description": null,
        "type": "ml-connector",
        "endpoint": "localhost",
        "active": true,
        "params": "{\"path\":\"\/usr\/local\/bin\/python3\"}",
        "created_at": "2021-02-21T21:34:26.257Z",
        "updated_at": "2021-03-01T20:27:03.440Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91"
    }
];
class SeedInsertConnections1614738490044 {
    async up(queryRunner) {
        const repository = typeorm_1.getRepository(integration_base_1.Connection);
        const domain = await typeorm_1.getRepository(shell_1.Domain).findOne({
            name: 'SYSTEM'
        });
        return await Promise.all(SEED.map(async (connection) => {
            await repository.save(Object.assign(Object.assign({}, connection), { domain }));
        }));
    }
    async down(queryRunner) {
        const repository = typeorm_1.getRepository(integration_base_1.Connection);
        const domain = await typeorm_1.getRepository(shell_1.Domain).findOne({
            name: 'SYSTEM'
        });
        return await Promise.all(SEED.reverse().map(async (connection) => {
            await repository.delete({ name: connection.name, domain });
        }));
    }
}
exports.SeedInsertConnections1614738490044 = SeedInsertConnections1614738490044;
//# sourceMappingURL=1614738490044-SeedInsertConnections.js.map