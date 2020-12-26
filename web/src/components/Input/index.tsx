import React from 'react'

import * as St from './styles'

type InputProps = JSX.IntrinsicElements['input']

const Input: React.FC<InputProps> = ({ name, className }) => {
  return <St.Container name={name} className={className} />
}
export default Input
