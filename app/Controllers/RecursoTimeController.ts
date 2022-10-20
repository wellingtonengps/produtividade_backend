import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RecursoTime from 'App/Models/RecursoTime'

export default class RecursoTimeController {
  public async index() {
    const recursosTime = await RecursoTime.all()

    return {
      recursosTime,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const recursoTime = await RecursoTime.create(body)

    response.status(201)

    return {
      recursoTime,
    }
  }

  public async show({ params }: HttpContextContract) {
    const recursoTime = await RecursoTime.findOrFail(params.id)

    return {
      recursoTime,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    const body = request.body()

    const recursoTime = await RecursoTime.findOrFail(params.id)

    recursoTime.recurso = body.recurso
    recursoTime.time = body.time

    await recursoTime.save()

    return {
      recursoTime,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const recursoTime = await RecursoTime.findOrFail(params.id)

    await recursoTime.delete()

    return {
      recursoTime,
    }
  }
}
