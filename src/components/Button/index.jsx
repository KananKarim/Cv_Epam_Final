import React from 'react'
import "./style.scss"

const Button = ({text,sign,onClick}) => {
  return (
    <button onClick={onClick}><span>{sign}</span>&nbsp;{text}</button>
  )
}

export default Button