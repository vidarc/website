import { useReducer, createContext, FunctionComponent } from 'react'

export interface User {
  displayName?: string
  role?: 'admin' | 'user'
}

export interface UserContextInterface {
  state: User
  dispatch({ type: string, payload: User }): void
}

export const UserContext = createContext<UserContextInterface>(null)

const reducer = (state: User, action: { type: string; payload: User }) => {
  switch (action.type) {
    case 'update-user':
      return { ...state, ...action.payload }
    case 'clear-user':
      return {}
    default:
      return {}
  }
}

export const UserProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {})
  const value = { state, dispatch }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
