"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedInsertLiteMenus1614738551599 = void 0;
const typeorm_1 = require("typeorm");
const shell_1 = require("@things-factory/shell");
const lite_menu_1 = require("@things-factory/lite-menu");
const SEED = [
    {
        "id": "248bbf56-88f6-49fa-b614-c772b73f55c8",
        "name": "ImagePopup",
        "description": null,
        "parent": "",
        "rank": null,
        "type": "board",
        "value": "6869635c-0f26-4e41-a220-af281c3ffe7e",
        "icon": null,
        "active": false,
        "created_at": "2021-02-08T19:48:43.462Z",
        "updated_at": "2021-02-08T19:48:43.462Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91"
    },
    {
        "id": "b51390a0-2030-4265-89e1-48e22f2c970e",
        "name": "TestCase01",
        "description": null,
        "parent": "dashboard",
        "rank": 1,
        "type": "board",
        "value": "4398d533-1656-45a0-835c-cbee36f724fa",
        "icon": "dashboard",
        "active": true,
        "created_at": "2021-02-16T20:48:23.963Z",
        "updated_at": "2021-02-16T21:17:11.656Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91"
    },
    {
        "id": "b1495d21-82c8-43c3-af96-123568b6b120",
        "name": "TestCase02",
        "description": null,
        "parent": "dashboard",
        "rank": 2,
        "type": "board",
        "value": "2d2fb0ca-164c-43f0-ba51-1f8632ce0671",
        "icon": "dashboard",
        "active": true,
        "created_at": "2021-02-16T21:17:45.225Z",
        "updated_at": "2021-02-16T22:13:48.215Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91"
    },
    {
        "id": "6c4ba7db-7b84-4675-97c3-79236f433076",
        "name": "System Architecture",
        "description": null,
        "parent": "dashboard",
        "rank": 4,
        "type": "board",
        "value": "cd2b1099-fa93-4acb-bc20-107950e694c5",
        "icon": "dashboard",
        "active": true,
        "created_at": "2021-02-14T20:38:24.742Z",
        "updated_at": "2021-02-16T22:53:34.613Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91"
    },
    {
        "id": "4ddc5933-1780-4792-aa99-0aa22d2e9f25",
        "name": "Overview",
        "description": null,
        "parent": "dashboard",
        "rank": 0,
        "type": "board",
        "value": "2230dc5b-4fb5-4391-a429-a0568b25d92c",
        "icon": "dashboard",
        "active": false,
        "created_at": "2021-02-15T20:54:33.744Z",
        "updated_at": "2021-02-16T23:56:28.290Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91"
    },
    {
        "id": "2de8c729-4e43-41f9-9346-b1163e5595a2",
        "name": "TestCase03~05",
        "description": null,
        "parent": "dashboard",
        "rank": 3,
        "type": "board",
        "value": "d2d900b3-6397-4114-b9ca-bdafd30acd2f",
        "icon": "dashboard",
        "active": true,
        "created_at": "2021-02-16T21:58:03.954Z",
        "updated_at": "2021-02-24T18:04:50.170Z",
        "domain_id": "45b89121-dd78-4e99-b557-cbd228336843",
        "creator_id": "dbd36d13-420f-4876-8860-431ba0319d91",
        "updater_id": "dbd36d13-420f-4876-8860-431ba0319d91"
    }
];
class SeedInsertLiteMenus1614738551599 {
    async up(queryRunner) {
        const repository = typeorm_1.getRepository(lite_menu_1.LiteMenu);
        const domain = await typeorm_1.getRepository(shell_1.Domain).findOne({
            name: 'SYSTEM'
        });
        return await Promise.all(SEED.map(async (litemenu) => {
            await repository.save(Object.assign(Object.assign({}, litemenu), { domain }));
        }));
    }
    async down(queryRunner) {
        const repository = typeorm_1.getRepository(lite_menu_1.LiteMenu);
        const domain = await typeorm_1.getRepository(shell_1.Domain).findOne({
            name: 'SYSTEM'
        });
        return await Promise.all(SEED.reverse().map(async (litemenu) => {
            await repository.delete({ name: litemenu.name, domain });
        }));
    }
}
exports.SeedInsertLiteMenus1614738551599 = SeedInsertLiteMenus1614738551599;
//# sourceMappingURL=1614738551599-SeedInsertLiteMenus.js.map