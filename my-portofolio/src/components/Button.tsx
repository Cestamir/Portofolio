import React from 'react'
interface ButtonItem {
    text: string
}

const Button = ({text } : ButtonItem) => {
  return (
    <button className='button-el'>{text}</button>
  )
}

export default Button