import { createSelector } from 'reselect'
import { RootState } from '../store'

const selectNotificationReducer = (state: RootState) => state.notification

export const selectNotification = createSelector([selectNotificationReducer], (notification) => ({
  message: notification.message,
  type: notification.type,
}))
