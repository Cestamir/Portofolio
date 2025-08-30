import React from 'react'

interface HeadlineProps {
    text: string,
    size: number
}

const Headline = ({text,size} : HeadlineProps) => {
  return (
    <h1 className='headline' style={{fontSize: size}}>{text}</h1>
  )
}

export default Headline