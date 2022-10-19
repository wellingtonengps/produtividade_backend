import RelatorioHora from './RelatorioHora'
import Time from './Time'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public pesoEficiencia: number

  @hasMany(() => Time)
  public listaTime: HasMany<typeof Time>

  @hasMany(() => RelatorioHora)
  public listaRelatorioHora: HasMany<typeof RelatorioHora>
}
