import * as React from 'react'

import { Button } from '@mattailes/ui'
import { Query } from 'react-apollo'

export default (query, Component) => props => {
  const { '*': pathParam, defaultId } = props

  const variables = {
    id: +pathParam || defaultId,
  }

  return (
    <Query query={query} variables={variables}>
      {({ networkStatus, loading, error, data, refetch }) => {
        if (networkStatus === 4) {
          return <p>refetching............</p>
        }

        if (loading) {
          return <p>loading..........</p>
        }

        if (error) {
          return <p>error.............</p>
        }

        // tslint:disable:jsx-no-lambda
        return (
          <div>
            <Component {...data} />
            <Button primary onClick={() => refetch()}>
              Refetch!
            </Button>
          </div>
        )
      }}
    </Query>
  )
}
