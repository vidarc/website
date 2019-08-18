import * as React from 'react'
import { useQuery } from 'react-apollo'

const withQuery = (query, Component) => props => {
  const { '*': pathParam, defaultId } = props

  const variables = {
    id: +pathParam || defaultId,
  }

  const { networkStatus, loading, error, data, refetch } = useQuery(query, { variables })

  if (networkStatus === 4) return <p>refetching............</p>

  if (loading) return <p>loading..........</p>

  if (error) return <p>error.............</p>

  const handleRefetch = () => refetch()

  return (
    <div>
      <Component {...data} />
      <ma-button onClick={handleRefetch}>Refetch!</ma-button>
    </div>
  )
}

export default withQuery
