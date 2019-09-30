import React, { useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import firebase from 'firebase/app'

import { checkDatabase } from './utils'
import { UserContext } from '../../context/User'

const Container = styled.div`
  margin-left: auto;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`

const isAdmin = (role: string) => role === 'admin'

const EntryPoint = () => {
  const { state, dispatch } = useContext(UserContext)

  const handleLoginClick = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().signInWithPopup(provider)
  }

  const handleLogoutClick = async () => {
    await firebase.auth().signOut()
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const { displayName, role } = await checkDatabase(user)
        dispatch({ type: 'update-user', payload: { displayName, role } })
      } else {
        dispatch({ type: 'clear-user', payload: {} })
      }
    })
  }, [dispatch])

  const { displayName, role } = state
  return (
    <Container>
      {displayName ? (
        [
          <span key="user">
            Hello, {displayName}! {isAdmin(role) ? '(admin)' : null}
          </span>,
          <button type="button" key="sign-out" onClick={handleLogoutClick}>
            Sign Out
          </button>
        ]
      ) : (
        <button type="button" onClick={handleLoginClick}>
          Sign In
        </button>
      )}
    </Container>
  )
}

export default EntryPoint
