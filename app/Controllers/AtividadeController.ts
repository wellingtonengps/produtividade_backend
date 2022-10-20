import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Atividade from 'App/Models/Atividade'

export default class AtividadeController {
  public async index() {
    const atividades = await Atividade.all()

    return {
      atividades,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const atividade = await Atividade.create(body)

    response.status(201)

    return {
      atividade,
    }
  }

  public async show({ params }: HttpContextContract) {
    const atividade = await Atividade.findOrFail(params.id)

    return {
      atividade,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    const body = request.body()

    const atividade = await Atividade.findOrFail(params.id)

    atividade.demanda = body.demanda
    atividade.recurso = body.recurso
    atividade.pesoComplexidade = body.pesoComplexidade

    await atividade.save()

    return {
      atividade,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const atividade = await Atividade.findOrFail(params.id)

    await atividade.delete()

    return {
      atividade,
    }
  }
}
