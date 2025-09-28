import React from 'react'
import ChatArea from '../chat-area';
import { getChatMessagesAction } from '../actions/chatSection.query';

const page = async (props: { params: Promise<{id: string}>;}) => {
    const params = await props.params;
    const messages = await getChatMessagesAction(params.id);
    console.log("Getting the messages: ", messages)
  return (
    <ChatArea messages={messages}/>
  )
}

export default page