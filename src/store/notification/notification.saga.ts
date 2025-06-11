import { takeLatest, all, call } from 'typed-redux-saga/macro'
import { NOTIFICATION_ACTION_TYPES } from './notification.types'
import { AnyAction } from 'redux'

let showNotificationFunction: ((message: string, type: 'success' | 'error') => void) | null = null

export const setShowNotificationFunction = (fn: typeof showNotificationFunction) => {
  showNotificationFunction = fn
}

export function* handleShowNotification(action: AnyAction) {
  if (showNotificationFunction) {
    const { message, type } = action.payload
    yield* call(showNotificationFunction, message, type)
  }
}

export function* onShowNotification() {
  yield* takeLatest(NOTIFICATION_ACTION_TYPES.SHOW_NOTIFICATION, handleShowNotification)
}

export function* notificationSaga() {
  yield* all([call(onShowNotification)])
}
