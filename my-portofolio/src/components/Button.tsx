import React from 'react'
interface ButtonItem {
    text: string,
    url: string
}

const Button = ({text,url } : ButtonItem) => {
  return (
    <button className='button-el'><a href={url} rel="noopener" target={url.includes("http") ? "_blank" : "_self"}>{text}</a></button>
  )
}

export default Button