import { database } from '@/lib/pg/db'
import { IPersonRepository } from '../person.repository.interface'
import { IPerson } from '@/entities/models/person.interface'

export class PersonRepository implements IPersonRepository {
  async create(person: IPerson): Promise<IPerson | undefined> {
    const result = await database.clientInstance?.query<IPerson>(
      'INSERT INTO person (cpf, name, birth, email, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [person.cpf, person.name, person.birth, person.email, person.user_id],
    )
    return result?.rows[0]
  }
}
