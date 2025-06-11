import { AnyAction } from 'redux'
import { NOTIFICATION_ACTION_TYPES } from './notification.types'

export type NotificationType = 'success' | 'error'

export type NotificationState = {
  message: string | null
  type: NotificationType | null
}

const INITIAL_STATE: NotificationState = {
  message: null,
  type: null,
}

export const notificationReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (action.type === NOTIFICATION_ACTION_TYPES.SHOW_NOTIFICATION) {
    return {
      ...state,
      message: action.payload.message,
      type: action.payload.type,
    }
  }

  if (action.type === NOTIFICATION_ACTION_TYPES.HIDE_NOTIFICATION) {
    return INITIAL_STATE
  }

  return state
}
