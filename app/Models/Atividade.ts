import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Demanada from './Demanda'
import Recurso from './Recurso'

export default class Atividade extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => Demanada)
  public demanda: HasOne<typeof Demanada>

  @hasOne(() => Recurso)
  public recurso: HasOne<typeof Recurso>

  @column()
  public pesoComplexidade: number
}
