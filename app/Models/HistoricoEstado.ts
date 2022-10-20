import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Demanada from './Demanda'

export default class HistoricoEstado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => Demanada)
  public recurso: HasOne<typeof Demanada>

  @column()
  public estado: string

  @column.dateTime({ autoCreate: true })
  public data: DateTime
}
