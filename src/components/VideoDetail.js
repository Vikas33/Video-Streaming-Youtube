import React from 'react'

const VideoDetail = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, description } = snippet;
  return (
    <div className='p-2 m-2 w-72 mr-5'>
      <ul className='px-4'>
        <li className='font-bold py-2 text-xs'>{title}</li>
        <li>{channelTitle}</li>
        <li className='font-light text-xs'>{description}</li>
        <li>{(statistics.viewCount / 1000000).toFixed(2)}<span className='font-bold'>M</span> views</li>
      </ul>
    </div>
  )
}

export default VideoDetail