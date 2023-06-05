import React from 'react'

const Button = (props) => {
  return (
    <div>

      <button className='px-[0.75rem] py-[0.1rem] bg-gray-200 m-2 rounded-lg text-sm'>{props.name}</button>
    </div>


  )
}

export default Button