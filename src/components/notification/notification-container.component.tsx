import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectNotification } from '../../store/notification/notification.selector'
import { hideNotification } from '../../store/notification/notification.action'
import NotificationPopup from './notification-popup.component'

const NOTIFICATION_TIMEOUT = 10000 // 10 seconds

const NotificationContainer = () => {
  const dispatch = useDispatch()
  const notification = useSelector(selectNotification)

  // Handle auto-dismiss
  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        dispatch(hideNotification())
      }, NOTIFICATION_TIMEOUT)
      return () => clearTimeout(timer)
    }
  }, [notification.message, dispatch])

  // Handle manual close
  const handleClose = () => {
    dispatch(hideNotification())
  }

  if (!notification.message || !notification.type) return null

  return (
    <NotificationPopup
      message={notification.message}
      type={notification.type}
      onClose={handleClose}
    />
  )
}

export default NotificationContainer
