// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  LockImage,
  DeviceStatus,
  CustomButton,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLockStatus] = useState(true)

  const onToggleLock = () => {
    setLockStatus(prevLockStatus => !prevLockStatus)
  }

  return (
    <MainContainer>
      {isLocked ? (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      <DeviceStatus>
        Your Device is {isLocked ? 'Locked' : 'Unlocked'}
      </DeviceStatus>
      <CustomButton type="button" onClick={onToggleLock}>
        {isLocked ? 'Unlock' : 'Lock'}
      </CustomButton>
    </MainContainer>
  )
}

export default Unlock
