import React from 'react'
interface ButtonItem {
    text: string,
    url: string
}

const Button = ({text,url } : ButtonItem) => {
  return (
    <button className='button-el'><a href={url} target='_blank'>{text}</a></button>
  )
}

export default Button