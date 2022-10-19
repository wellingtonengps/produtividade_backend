import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class RelatorioHora extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public idDemanda: string

  @column()
  public idUsuario: number

  @column()
  public data: string

  @column()
  public dataInicio: boolean

  @column()
  public dataFim: string
}
