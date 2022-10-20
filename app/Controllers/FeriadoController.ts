import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Feriado from 'App/Models/Feriado'

export default class FeriadoController {
  public async index() {
    const feriados = await Feriado.all()

    return {
      feriados,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const feriado = await Feriado.create(body)

    response.status(201)

    return {
      feriado,
    }
  }

  public async show({ params }: HttpContextContract) {
    const feriado = await Feriado.findOrFail(params.id)

    return {
      feriado,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    const body = request.body()

    const feriado = await Feriado.findOrFail(params.id)

    feriado.nome = body.nome
    feriado.data = body.data

    await feriado.save()

    return {
      feriado,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const feriado = await Feriado.findOrFail(params.id)

    await feriado.delete()

    return {
      feriado,
    }
  }
}
