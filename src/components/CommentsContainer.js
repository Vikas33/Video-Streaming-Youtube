import React from 'react'
import Comments from './Comments'
import { useState, useEffect } from 'react'
import { YOUTUBE_COMMENTS_API } from '../utils/constants'

const CommentsContainer = () => {

  const [comments, setcomments] = useState([])

  useEffect(() => {
    getComments();
  }, [])

  const getComments = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API);
    const json = await data.json();
    setcomments(json.items);
    // console.log(json.items.snippet.topLevelComment.snippet)

  }
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold '>Comments : </h1>
      {comments?.length && comments.map((items) => <Comments data={items} key={items.id} />)}
    </div>
  )
}

export default CommentsContainer