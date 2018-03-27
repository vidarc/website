import { Person, Film } from './'

const Starship = /* GraphQL */ `
  type Starship {
    # The number of non-essential people this starship can transport.
    passengers: String,
    # The hypermedia URL of this resource.
    url: String,
    # The maximum length of time that this starship can provide consumables for its entire crew
    # without having to resupply.
    consumables: String,
    # The model or official name of this starship. Such as T-65 X-wing or DS-1 Orbital Battle Station.
    model: String,
    # The class of this starship, such as Starfighter or Deep Space Mobile Battlestation.
    starship_class: String,
    # An array of People URL Resources that this starship has been piloted by.
    pilots: [Person],
    # The number of personnel needed to run or pilot this starship.
    crew: String,
    # The class of this starships hyperdrive.
    hyperdrive_rating: String,
    # The Maximum number of Megalights this starship can travel in a standard hour.
    # A Megalight is a standard unit of distance and has never been defined before within the Star Wars universe.
    # This figure is only really useful for measuring the difference in speed of starships.
    # We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
    MGLT: String,
    # The manufacturer of this starship. Comma seperated if more than one.
    manufacturer: String,
    # The maximum number of kilograms that this starship can transport.
    cargo_capacity: String,
    # An array of Film URL Resources that this starship has appeared in.
    films: [Film],
    # The length of this starship in meters.
    length: String,
    # The name of this starship. The common name, such as Death Star.
    name: String,
    # the ISO 8601 date format of the time that this resource was edited.
    edited: String,
    # The ISO 8601 date format of the time that this resource was created.
    created: String,
    # The maximum speed of this starship in atmosphere. n/a if this starship is incapable of atmosphering flight.
    max_atmosphering_speed: String,
    # The cost of this starship new, in galactic credits.
    cost_in_credits: String
  }
`
export default () => [Starship, Person, Film]
