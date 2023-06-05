import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'


const Head = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch()
  const searchCache = useSelector((store) => store.search)

  useEffect(() => {
    if (searchQuery.length) {
      const timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery])
        } else
          getSearchSuggestions()
      }, 200)

      return () => {
        clearTimeout(timer);
      }
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json()
    setSuggestions(json.items);
    dispatch(cacheResults({
      [searchQuery]: json.items
    }))

  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <>
      <div className='grid grid-flow-col p-6 m-2 fixed top-0 mt-0 w-full h- ml-[-2px] bg-slate-50'>
        <div className='flex'>
          <img
            onClick={() => toggleMenuHandler()}
            className='h-8 align-middle justify-center cursor-pointer'
            alt='menu' src='https://www.svgrepo.com/show/312300/hamburger-menu.svg' />
          <a href='/'>
            <img
              className='h-4 mx-2 mt-2'
              alt='youtube-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png' />
          </a>
        </div>
        <div className='col-span-10 text-center pr-10'>
          <div className='mt-[-8px] '>
            <input placeholder='Search' className='w-1/2 border border-r-0 border-gray-400 p-1 pl-3 rounded-l-full' type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className='border border-gray-400 py-1 rounded-r-full px-5 bg-gray-100 '>🔍</button>
          </div>
          {showSuggestions && <div className=' mt-1 absolute bg-white py-2 px-2 w-[25rem] ml-44 shadow-xl rounded-2xl border-gray-100'>
            <ul className='text-left'>
              {suggestions?.length && suggestions.map((item) =>
                <li key={item.link} className='py-2 px-3 shadow-sm hover:bg-gray-100 cursor-default'>🔍 {item.title}</li>
              )}
            </ul>
          </div>}
        </div>
        <div className='col-span-1'>
          <img className='h-6' alt='user-logo' src='https://cdn-icons-png.flaticon.com/512/552/552721.png' />
        </div>
      </div >

    </>
  )
}

export default Head