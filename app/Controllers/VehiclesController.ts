import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vehicle from 'App/Models/Vehicle'

export default class VehiclesController {
  public async index() {
    const vehicles = await Vehicle.all()

    return {
      vehicles,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const vehicle = await Vehicle.create(body)

    response.status(201)

    return {
      vehicle,
    }
  }

  public async show({ params }: HttpContextContract) {
    const vehicle = await Vehicle.findOrFail(params.id)

    return {
      vehicle,
    }
  }

  public async update({ request, params }: HttpContextContract) {
    const body = request.body()

    const vehicle = await Vehicle.findOrFail(params.id)

    vehicle.name = body.name
    vehicle.description = body.description
    vehicle.plate = body.plate
    vehicle.isFavorite = body.isFavorite
    vehicle.year = body.year
    vehicle.color = body.color
    vehicle.price = body.price

    await vehicle.save()

    return {
      vehicle,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const vehicle = await Vehicle.findOrFail(params.id)

    await vehicle.delete()

    return {
      vehicle,
    }
  }
}
