import Usuario from './Usuario'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Time extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @hasMany(() => Usuario)
  public listaUsuario: HasMany<typeof Usuario>
}
