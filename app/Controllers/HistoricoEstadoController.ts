import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HistoricoEstado from 'App/Models/HistoricoEstado'

export default class HistoricoEstadoController {
  public async index() {
    const historicosEstado = await HistoricoEstado.all()

    return {
      historicosEstado,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const historicoEstado = await HistoricoEstado.create(body)

    response.status(201)

    return {
      historicoEstado,
    }
  }

  public async show({ params }: HttpContextContract) {
    const historicoEstado = await HistoricoEstado.findOrFail(params.id)

    return {
      historicoEstado,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    const body = request.body()

    const historicoEstado = await HistoricoEstado.findOrFail(params.id)

    historicoEstado.recurso = body.recurso
    historicoEstado.estado = body.estado
    historicoEstado.data = body.data

    await historicoEstado.save()

    return {
      historicoEstado,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const historicoEstado = await HistoricoEstado.findOrFail(params.id)

    await historicoEstado.delete()

    return {
      historicoEstado,
    }
  }
}
