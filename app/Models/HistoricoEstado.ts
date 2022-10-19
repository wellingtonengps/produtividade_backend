import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class HistoricoEstado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public idDemanda: string

  @column()
  public estado: number

  @column()
  public dataMudancaEstado: string
}

/*

@column.dateTime({ autoCreate: true })
public createdAt: DateTime

@column.dateTime({ autoCreate: true, autoUpdate: true })
public updatedAt: DateTime

*/
