"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedUpdateUser1614662984660 = void 0;
const typeorm_1 = require("typeorm");
const shell_1 = require("@things-factory/shell");
const auth_base_1 = require("@things-factory/auth-base");
const SEED = [
    {
        email: 'admin@yiwoosolution.co.kr'
    }
];
class SeedUpdateUser1614662984660 {
    async up(queryRunner) {
        // await queryRunner.query('UPDATE users SET email = "admin@yiwoosolution.co.kr" WHERE email = "admin@hatiolab.com" ')
        const repository = typeorm_1.getRepository(auth_base_1.User);
        const domain = await typeorm_1.getRepository(shell_1.Domain).findOne({
            name: 'SYSTEM'
        });
        return await Promise.all(SEED.map(async (updateUser) => {
            await repository.update({ email: 'admin@hatiolab.com' }, updateUser);
        }));
    }
    async down(queryRunner) {
        // const repository = getRepository(UpdateUser)
        // const domain: Domain = await getRepository(Domain).findOne({
        //   name: 'SYSTEM'
        // })
        // return await Promise.all(SEED.reverse().map(async updateUser => {
        //   await repository.delete({ name: updateUser.name, domain })
        // }))
    }
}
exports.SeedUpdateUser1614662984660 = SeedUpdateUser1614662984660;
//# sourceMappingURL=1614662984660-SeedUpdateUser.js.map