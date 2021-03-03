import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { User } from '@things-factory/auth-base'

const SEED = [
  {
    email: 'admin@yiwoosolution.co.kr'
  }
]
export class SeedUpdateUser1614662984660 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query('UPDATE users SET email = "admin@yiwoosolution.co.kr" WHERE email = "admin@hatiolab.com" ')
    
    const repository = getRepository(User)
    const domain: Domain = await getRepository(Domain).findOne({
      name: 'SYSTEM'
    })

    return await Promise.all(SEED.map(async updateUser => {
      await repository.update(
        { email: 'admin@hatiolab.com'}, 
        updateUser
      )
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // const repository = getRepository(UpdateUser)
    // const domain: Domain = await getRepository(Domain).findOne({
    //   name: 'SYSTEM'
    // })

    // return await Promise.all(SEED.reverse().map(async updateUser => {
    //   await repository.delete({ name: updateUser.name, domain })
    // }))
  }
}
