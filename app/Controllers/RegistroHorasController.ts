import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegistroHoras from 'App/Models/RegistroHoras'

export default class RegistroHorasController {
  public async index() {
    const registrosHoras = await RegistroHoras.all()

    return {
      registrosHoras,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const registroHoras = await RegistroHoras.create(body)

    response.status(201)

    return {
      registroHoras,
    }
  }

  public async show({ params }: HttpContextContract) {
    const registroHoras = await RegistroHoras.findOrFail(params.id)

    return {
      registroHoras,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    const body = request.body()

    const registroHoras = await RegistroHoras.findOrFail(params.id)

    registroHoras.demanda = body.demanda
    registroHoras.recurso = body.recurso
    registroHoras.data = body.data
    registroHoras.dataInicio = body.dataInicio
    registroHoras.dataFim = body.dataFim

    await registroHoras.save()

    return {
      registroHoras,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const registroHoras = await RegistroHoras.findOrFail(params.id)

    await registroHoras.delete()

    return {
      registroHoras,
    }
  }
}
