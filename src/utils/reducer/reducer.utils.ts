import { AnyAction } from 'redux'
// prevent human error

//type predicate function
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['Type']
  match(action: AnyAction): action is ReturnType<AC>
}
//type overloading
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC,
): Matchable<AC>
export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(
  actionCreator: AC,
): Matchable<AC>
//real function
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type
    },
  })
}

//1 with payload
export type ActionWithPayload<T, P> = {
  type: T
  payload: P
}
//2 without payload
export type Action<T> = {
  type: T
}
//function overloading: allow the function to recieve different parameters
//classic function decoration style
//with P
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>
//without P
export function createAction<T extends string>(type: T, payload: void): Action<T>

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload }
}
