import React from 'react'

const Comments = ({ data }) => {

  const { snippet } = data;
  const { topLevelComment } = snippet;
  const { snippet: innerSnippet } = topLevelComment;
  const { authorDisplayName, authorProfileImageUrl, textDisplay } = innerSnippet

  return (
    <div className='flex shadow-sm bg-gray-50 p-2 rounded-lg my-2'>
      <img
        className='w-8 h-8 mt-2'
        alt='user-logo' src={authorProfileImageUrl} />
      <div className='px-5'>
        <p className='font-bold'>{authorDisplayName}</p>
        <p>{textDisplay.slice(0, 250)}&hellip; </p>
      </div>
    </div>
  )
}

export default Comments;