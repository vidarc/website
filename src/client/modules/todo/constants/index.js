// @flow

/** **********************************************
Globals
*********************************************** */
const visibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}
export default visibilityFilter

/** **********************************************
Types
*********************************************** */
export type Action<T> = {
  type: string,
  payload: T,
}

export type Todo = {
  id: number,
  text: string,
  completed: boolean,
}

export type VisibilityFilter = {
  filter: 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED',
}
