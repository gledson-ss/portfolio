import React from 'react'

import * as St from './styles'

type InputProps = JSX.IntrinsicElements['input']

const Input: React.FC<InputProps> = ({ name }) => {
  return <St.Container name={name} />
}
export default Input
