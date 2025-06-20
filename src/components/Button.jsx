import React from 'react'

const Button = ({message,bgColor}) => {
  return (
    <div className={`${bgColor} cursor-pointer rounded-2xl playfair p-6 text-lg text-white`}>
      <button>{message}</button>
    </div>
  )
}

export default Button
