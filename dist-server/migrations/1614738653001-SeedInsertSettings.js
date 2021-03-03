"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedInsertSettings1614738653001 = void 0;
const typeorm_1 = require("typeorm");
const shell_1 = require("@things-factory/shell");
const setting_base_1 = require("@things-factory/setting-base");
const SEED = [
    {
        "id": "ee67bf9c-7880-4107-b84d-b5afa1ca5ef7",
        "name": "dashboard",
        "description": "dashboard",
        "category": "board",
        "value": "2230dc5b-4fb5-4391-a429-a0568b25d92c",
        "created_at": "2020-12-20T23:48:12.628Z",
        "updated_at": "2021-02-09T00:19:03.391Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": null,
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91"
    }
];
class SeedInsertSettings1614738653001 {
    async up(queryRunner) {
        const repository = typeorm_1.getRepository(setting_base_1.Setting);
        const domain = await typeorm_1.getRepository(shell_1.Domain).findOne({
            name: 'SYSTEM'
        });
        return await Promise.all(SEED.map(async (setting) => {
            await repository.save(Object.assign(Object.assign({}, setting), { domain }));
        }));
    }
    async down(queryRunner) {
        const repository = typeorm_1.getRepository(setting_base_1.Setting);
        const domain = await typeorm_1.getRepository(shell_1.Domain).findOne({
            name: 'SYSTEM'
        });
        return await Promise.all(SEED.reverse().map(async (setting) => {
            await repository.delete({ name: setting.name, domain });
        }));
    }
}
exports.SeedInsertSettings1614738653001 = SeedInsertSettings1614738653001;
//# sourceMappingURL=1614738653001-SeedInsertSettings.js.map