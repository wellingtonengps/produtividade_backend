import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Recurso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public nivelEficiencia: number
}
