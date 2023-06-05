import React from 'react'

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className='p-2 m-2 w-72 mr-5'>
      <img className='rounded-lg ' alt='thumbnail' src={thumbnails.high.url} />
      <ul className='px-4'>
        <li className='font-bold py-2 text-xs'>{title}</li>
        <li className='font-light text-xs'>{channelTitle}</li>
        <li className='font-base text-xs'>{(statistics.viewCount / 1000000).toFixed(2)}M views . {publishedAt.slice(0, 4)}</li>
        <li></li>
      </ul>
    </div>
  )
}

export default VideoCard
