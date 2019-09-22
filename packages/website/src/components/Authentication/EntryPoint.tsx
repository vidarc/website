import React, { useState } from 'react'
import styled from '@emotion/styled'
import firebase from 'firebase/app'

const Container = styled.div`
  margin-left: auto;
`

const EntryPoint = () => {
  const [user, setUser] = useState()
  // const [isAdmin, setIsAdmin] = useState(false)

  const handleClick = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    try {
      const auth = await firebase.auth().signInWithPopup(provider)
      const { displayName, uid } = auth.user
      setUser(displayName)
      console.log(uid)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      {user ? (
        <span>Hello, {user}!</span>
      ) : (
        <button type="button" onClick={handleClick}>
          Click Me To Sign In
        </button>
      )}
    </Container>
  )
}

export default EntryPoint
