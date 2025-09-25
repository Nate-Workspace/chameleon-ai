import React from 'react'
import ChatArea from '../chat-area';

const page = async (props: { params: Promise<{id: string}>;}) => {
    const params = await props.params;
  return (
    <ChatArea/>
  )
}

export default page