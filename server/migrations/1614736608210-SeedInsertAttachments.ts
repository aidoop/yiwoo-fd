import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { Attachment } from '@things-factory/attachment-base'
  
const SEED = [
  {
    "id" : "47425b67-e362-4ce3-8090-456403fd5b4a",
    "name" : "Gear-0.2s-200px.gif",
    "description" : null,
    "mimetype" : "image\/gif",
    "encoding" : "7bit",
    "category" : "image",
    "ref_by" : null,
    "path" : "47425b67-e362-4ce3-8090-456403fd5b4a.gif",
    "size" : "0",
    "created_at" : "2021-02-15T17:31:02.913Z",
    "updated_at" : "2021-02-15T17:31:02.913Z",
    "domain_id" : "45b89121-dd78-4e99-b557-cbd228336843",
    "creator_id" : "dbd36d13-420f-4876-8860-431ba0319d91",
    "updater_id" : "dbd36d13-420f-4876-8860-431ba0319d91"
  }
]

export class SeedInsertAttachments1614736608210 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Attachment)
    const domain: Domain = await getRepository(Domain).findOne({
      name: 'SYSTEM'
    })

    return await Promise.all(SEED.map(async attachment => {
      await repository.save({
        ...attachment,
        domain
      })
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Attachment)
    const domain: Domain = await getRepository(Domain).findOne({
      name: 'SYSTEM'
    })

    return await Promise.all(SEED.reverse().map(async attachment => {
      await repository.delete({ name: attachment.name, domain })
    }))
  }
}
