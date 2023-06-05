import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState()

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages)

  useEffect(() => {
    const chat = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(28)
      }))
    }, 500);

    return () => clearInterval(chat)
  }, [])

  return (
    <>

      <div className='w-[23rem] h-[500px] ml-2 p-2 border border-gray-200 rounded-t-2xl overflow-y-scroll flex flex-col-reverse'>
        <div className='text-xs'>
          {chatMessages.map((c, i) =>
            <ChatMessage key={i} name={c.name} message={c.message} />
          )}
        </div>
      </div>

      <form className='w-[23rem] p-2 ml-2 h-28 border border-gray-200  rounded-b-2xl flex flex-col'
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(addMessage({
            name: 'Vikas Gupta',
            message: liveMessage
          }));
          setLiveMessage('')
        }}>
        <input placeholder='Say Something...' type='text' className='w-[21rem] border-b border-gray-200 mt-4 ml-2 hover:bg-gray-50 focus:outline-none'
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className='py-4 w-10 h-10 mt-2 cursor-default self-end'>
          <img className='w-6 h-6 cursor-pointer' alt='send' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3Rcc6FNpeg-Nt8OeX_bwb2-HnZZip3FKWA&usqp=CAU' />
        </button>
      </form>
    </>
  )
}

export default LiveChat