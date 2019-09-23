import React, { useContext } from 'react'
import styled from '@emotion/styled'
import firebase from 'firebase/app'

import { checkDatabase } from './utils'
import { UserContext } from '../../context/User'

const Container = styled.div`
  margin-left: auto;
`

const isAdmin = (role: string) => role === 'admin'

const EntryPoint = () => {
  const { state, dispatch } = useContext(UserContext)

  const handleClick = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    try {
      const auth = await firebase.auth().signInWithPopup(provider)
      const { displayName, role } = await checkDatabase(auth.user)

      dispatch({ type: 'update-user', payload: { displayName, role } })
    } catch (error) {
      console.log(error)
    }
  }

  const { displayName, role } = state
  return (
    <Container>
      {displayName ? (
        <span>
          Hello, {displayName}! {isAdmin(role) ? '(admin)' : null}
        </span>
      ) : (
        <button type="button" onClick={handleClick}>
          Click Me To Sign In
        </button>
      )}
    </Container>
  )
}

export default EntryPoint
