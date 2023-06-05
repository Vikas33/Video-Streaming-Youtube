import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if (!isMenuOpen) return null;

  return (
    <div className=' backdrop-blur-sm px-5 fixed overflow-y-scroll top-[70px] left-0 w-2/12 h-[90%] bg-slate-50 '>
      <ul className='pr-[4rem] space-y-2 border-b-2'>

        <li className='font-semibold text-sm'><Link to={'/'}>Home</Link ></li>
        <li className='text-sm'>Shorts</li>
        <li className='pb-6 text-sm'>Subscriptions</li>
      </ul>
      <ul className='space-y-2 pt-3 border-b-2 text-xs'>
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li className='pb-6'>Liked Videos</li>

      </ul>
      <h1 className='font-bold pt-3 pb-3 text-sm'>Subscriptions</h1>
      <ul className='space-y-2 border-b-2 text-xs'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li className='pb-6'>Movies</li>
      </ul>
      <h1 className='font-bold pt-3 pb-3 text-sm'>Explore</h1>
      <ul className='space-y-2 border-b-2 text-xs'>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>  Movies & Shows</li>
        <li> Live</li>
        <li> Gaming</li>
        <li> News</li>
        <li>Sports</li>
        <li>Learning</li>
        <li className='pb-6'>Fashion & Beauty</li>
      </ul>
      <h1 className='font-bold text-sm pt-3 pb-3'>More from Youtube</h1>
      <ul className='space-y-2 border-b-2 text-xs'>
        <li>Youtube Premium</li>
        <li>Youtube Music</li>
        <li className='pb-6'>Youtube Kids</li>
      </ul>
      <ul className='pt-3 space-y-2 border-b-2 text-xs gap-2'>
        <li>Settings</li>
        <li>Report history</li>
        <li>Help</li>
        <li className='pb-6'>Send feedback</li>
      </ul>
      <Footer />
    </div>
  )
}

export default Sidebar