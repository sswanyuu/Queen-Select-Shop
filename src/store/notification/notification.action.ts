import { NOTIFICATION_ACTION_TYPES } from './notification.types'
import { createAction } from '../../utils/reducer/reducer.utils'

export type NotificationType = 'success' | 'error'

export type NotificationData = {
  message: string
  type: NotificationType
}

export const showNotification = (message: string, type: NotificationType) =>
  createAction(NOTIFICATION_ACTION_TYPES.SHOW_NOTIFICATION, { message, type })

export const hideNotification = () => createAction(NOTIFICATION_ACTION_TYPES.HIDE_NOTIFICATION)
