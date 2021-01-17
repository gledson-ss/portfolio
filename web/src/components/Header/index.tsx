import React from 'react'

import DesktopHeader from '../DesktopHeader'
import MobileHeader from '../MobileHeader'
import * as St from './styles'
const Header: React.FC = () => {
  return (
    <St.Container>
      <MobileHeader />
      <DesktopHeader />
    </St.Container>
  )
}

export default Header
