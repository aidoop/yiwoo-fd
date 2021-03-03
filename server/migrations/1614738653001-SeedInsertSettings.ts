import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { Setting } from '@things-factory/setting-base'
  
const SEED = [
  {
    "id" : "ee67bf9c-7880-4107-b84d-b5afa1ca5ef7",
    "name" : "dashboard",
    "description" : "dashboard",
    "category" : "board",
    "value" : "2230dc5b-4fb5-4391-a429-a0568b25d92c",
    "created_at" : "2020-12-20T23:48:12.628Z",
    "updated_at" : "2021-02-09T00:19:03.391Z",
    "domain_id" : "45b89121-dd78-4e99-b557-cbd228336843",
    "creator_id" : null,
    "updater_id" : "dbd36d13-420f-4876-8860-431ba0319d91"
  }
]

export class SeedInsertSettings1614738653001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Setting)
    const domain: Domain = await getRepository(Domain).findOne({
      name: 'SYSTEM'
    })

    return await Promise.all(SEED.map(async setting => {
      await repository.save({
        ...setting,
        domain
      })
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Setting)
    const domain: Domain = await getRepository(Domain).findOne({
      name: 'SYSTEM'
    })

    return await Promise.all(SEED.reverse().map(async setting => {
      await repository.delete({ name: setting.name, domain })
    }))
  }
}
