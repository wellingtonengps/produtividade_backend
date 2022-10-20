import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Recurso from 'App/Models/Recurso'

export default class RecursoController {
  public async index() {
    const recursos = await Recurso.all()

    return {
      recursos,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const recurso = await Recurso.create(body)

    response.status(201)

    return {
      recurso,
    }
  }

  public async show({ params }: HttpContextContract) {
    const recurso = await Recurso.findOrFail(params.id)

    return {
      recurso,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    const body = request.body()

    const recurso = await Recurso.findOrFail(params.id)

    recurso.nome = body.nome
    recurso.nivelEficiencia = body.nivelEficiencia

    await recurso.save()

    return {
      recurso,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const recurso = await Recurso.findOrFail(params.id)

    await recurso.delete()

    return {
      recurso,
    }
  }
}
