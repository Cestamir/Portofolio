import React from 'react'

interface HeadlineProps {
    text: string,
}

const Headline = ({text} : HeadlineProps) => {
  return (
    <div className='headline' ><h1>{text}</h1></div>
  )
}

export default Headline