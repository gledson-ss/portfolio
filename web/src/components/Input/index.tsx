import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'

import * as St from './styles'

type InputProps = JSX.IntrinsicElements['input'] & Props

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <St.Container {...rest} />
}
export default Input
