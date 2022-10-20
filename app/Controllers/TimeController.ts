import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Time from 'App/Models/Time'

export default class TimeController {
  public async index() {
    const times = await Time.all()

    return {
      times,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const time = await Time.create(body)

    response.status(201)

    return {
      time,
    }
  }

  public async show({ params }: HttpContextContract) {
    const time = await Time.findOrFail(params.id)

    return {
      time,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    const body = request.body()

    const time = await Time.findOrFail(params.id)

    time.nome = body.nome

    await time.save()

    return {
      time,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const time = await Time.findOrFail(params.id)

    await time.delete()

    return {
      time,
    }
  }
}
