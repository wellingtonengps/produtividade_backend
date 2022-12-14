import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Time extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string
}
