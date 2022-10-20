import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Demanada from './Demanda'
import Recurso from './Recurso'

export default class RegistroHoras extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => Demanada)
  public demanda: HasOne<typeof Demanada>

  @hasOne(() => Recurso)
  public recurso: HasOne<typeof Recurso>

  @column()
  public data: DateTime

  @column()
  public dataInicio: DateTime

  @column()
  public dataFim: DateTime
}
