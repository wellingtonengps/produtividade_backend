import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Recurso from './Recurso'
import Time from './Time'

export default class RecursoTime extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => Recurso)
  public recurso: HasOne<typeof Recurso>

  @hasOne(() => Time)
  public time: HasOne<typeof Time>
}
