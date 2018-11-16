// @flow

export type Film = {
  id: number,
  title: string,
  episode_id: number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,
  species: Array<string>,
  starships: Array<string>,
  vehicles: Array<string>,
  characters: Array<string>,
  planets: Array<string>
}
