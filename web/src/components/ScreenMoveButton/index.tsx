import React from 'react'

import * as St from './styles'

const ScreenMoveButton: React.FC = () => {
  function handleClick() {
    window.scrollBy(0, -9999)
  }
  return (
    <St.Container onClick={() => handleClick()}>
      <St.ArrowImage />
    </St.Container>
  )
}

export default ScreenMoveButton
