// @flow

import gql from 'graphql-tag'
import { loader, getAll, getOne } from './helpers'
import type { Vehicle } from './../../../common/types/StarWars'

export const VehicleTypeDef = gql`
  extend type Query {
    getAllVehicles: [Vehicle]
    getVehicle(id: Int): Vehicle
  }

  type Vehicle {
    # The number of non-essential people this vehicle can transport.
    passengers: String
    # The class of this vehicle, such as Wheeled.
    vehicle_class: String
    # The maximum length of time that this vehicle can provide consumables for its
    # entire crew without having to resupply.
    consumables: String
    # The model or official name of this vehicle. Such as All Terrain Attack Transport.
    model: String
    # An array of People URL Resources that this vehicle has been piloted by.
    pilots: [Person]
    # The number of personnel needed to run or pilot this vehicle.
    crew: String
    # The manufacturer of this vehicle. Comma seperated if more than one.
    manufacturer: String
    # The maximum number of kilograms that this vehicle can transport.
    cargo_capacity: String
    # An array of Film URL Resources that this vehicle has appeared in.
    films: [Film]
    # The length of this vehicle in meters.
    length: String
    # The name of this vehicle. The common name, such as Sand Crawler.
    name: String
    # The maximum speed of this vehicle in atmosphere.
    max_atmosphering_speed: String
    # The cost of this vehicle new, in galactic credits.
    cost_in_credits: String
  }
`

export const vehicleResolvers = {
  Query: {
    getAllVehicles: () => getAll('vehicles'),
    getVehicle: (id: number) => getOne('vehicles', id),
  },

  Vehicle: {
    pilots: ({ pilots }: Vehicle) => loader.loadMany(pilots),
    films: ({ films }: Vehicle) => loader.loadMany(films),
  },
}
