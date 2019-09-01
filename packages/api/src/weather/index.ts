import { Request, Response } from 'firebase-functions'

function weatherApi(_request: Request, response: Response) {
  response.send('it all works!')
}

export default weatherApi
