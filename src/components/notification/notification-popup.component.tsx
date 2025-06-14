import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { MEDIA_QUERIES } from '../../utils/breakpoints'

const slideDown = keyframes`
  from { 
    transform: translate(-50%, -100%);
    opacity: 0;
  }
  to { 
    transform: translate(-50%, 0);
    opacity: 1;
  }
`

const PopupContainer = styled.div<{ type: 'success' | 'error' }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 400px;
  padding: 16px 40px 16px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  animation: ${slideDown} 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ type }) =>
    type === 'success'
      ? css`
          background: #4caf50;
          color: white;
        `
      : css`
          background: #f44336;
          color: white;
        `}
  ${MEDIA_QUERIES.mobile} {
    font-size: 12px;
    width: 80%;
  }
`

const Message = styled.span`
  flex-grow: 1;
  margin-right: 16px;
  word-break: break-word;
`

const CloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;

  &:hover {
    opacity: 0.8;
  }
`

type NotificationPopupProps = {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ message, type, onClose }) => {
  return (
    <PopupContainer type={type}>
      <Message>{message}</Message>
      <CloseButton onClick={onClose} aria-label="Close">
        &times;
      </CloseButton>
    </PopupContainer>
  )
}

export default NotificationPopup
