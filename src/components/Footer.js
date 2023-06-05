import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <div className='font-medium text-justify text-xs py-4 flex flex-wrap'>
      <div >
        <p>
          <Link href='#'>About </Link>
          <Link href='#'>Copyright </Link>
          <Link href='#'>Contact us </Link>
          <Link href='#'>Creators </Link>
          <Link href='#'>Developers </Link>
        </p>
      </div>
      <br />
      <div>
        <p>
          <Link href='#'>Terms Privacy Policy </Link>
          <span>&</span>
          <Link href='#'>Safety </Link>
          <Link href='#'>Test new features </Link>
        </p>
      </div>
      <div className='pt-3'>
        <p className='font-thin '>
          <span>© 2023 Vikas Gupta</span>
        </p>
      </div>
    </div >

  )
}

export default Footer