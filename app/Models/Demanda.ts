import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import HistoricoEstado from './HistoricoEstado'

export default class Demanada extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => HistoricoEstado)
  public listaHistoricoEstado: HasMany<typeof HistoricoEstado>

  @column()
  public dataEntraga: number

  @column()
  public horaDemanda: string

  @column()
  public listaUsuario: boolean

  @column()
  public pesoComplexidade: string
}
