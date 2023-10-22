import React from 'react'
import "./style.scss"

const Button = ({text,sign}) => {
  return (
    <button><span>{sign}</span>{text}</button>
  )
}

export default Button