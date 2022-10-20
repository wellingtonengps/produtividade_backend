import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Demanada from 'App/Models/Demanda'

export default class DemandaController {
  public async index() {
    const atividades = await Demanada.all()

    return {
      atividades,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const demanda = await Demanada.create(body)

    response.status(201)

    return {
      demanda,
    }
  }

  public async show({ params }: HttpContextContract) {
    const demanda = await Demanada.findOrFail(params.id)

    return {
      demanda,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    const body = request.body()

    const demanda = await Demanada.findOrFail(params.id)

    demanda.nome = body.nome
    demanda.dataEntraga = body.dataEntraga
    demanda.estado = body.estado

    await demanda.save()

    return {
      demanda,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const demanda = await Demanada.findOrFail(params.id)

    await demanda.delete()

    return {
      demanda,
    }
  }
}
