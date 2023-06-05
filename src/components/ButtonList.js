import React from 'react'
import Button from './Button'

const list = [
  'All', 'Gaming', 'Songs', 'Live', 'News', 'Sports', 'Bollywood', 'Football', 'Cooking', 'Divine', 'Bhakti', 'Tennis', 'Hollywood']

const ButtonList = () => {
  return (
    <div className='flex ml-[-2rem] fixed top-[64px] left-56 bg-slate-50 w-[80%] whitespace-nowrap overflow-auto scrollbar-hide'>
      {list.map(item => <Button name={item} key={(item)} />)}
    </div>
  )
}

export default ButtonList