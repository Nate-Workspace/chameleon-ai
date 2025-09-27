"use client";

import { useState, useRef, useEffect } from "react";
import { Box, Textarea, Button, ScrollArea } from "@mantine/core";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { createMessageAction } from "./actions/create-message-action";
import { CreateMessageProp } from "@/types/message-create-types";

export default function ChatArea() {
  const [messages, setMessages] = useState<CreateMessageProp[]>([
    {
      id: "1",
      chatId:"asdfasfda",
      sender: "ai",
      content: "Hello! 👋 I'm Chameleon AI. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessage: CreateMessageProp = {
      id: Date.now().toString(),
      chatId: "asdfasf",
      sender: "user",
      content: input,
    };

    // setMessages((prev) => [...prev, newMessage]);

    try {
      const sent = await createMessageAction(newMessage);
      console.log("Message sent sent:", sent);
    // const res = await axios.post("/api/ai/gemini", {
    //   prompt: input,
    // });

    // if(res.status !== 200){
    //   setMessages((prev)=> [...prev, {id: Date.now().toString(), sender: "ai" as const, content: "Something went wrong. Please try again."}])
    // }
    // console.log("response in chat area: ", res);
    // setMessages((prev)=> [...prev, {id: Date.now().toString(), sender: "ai", content: res.data}])
  } catch (error) {
    console.error("Error:", error);
  }

  
  setInput("");
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box className="flex flex-col h-full ">
      <ScrollArea className="flex-grow px-4 pt-6" scrollbarSize={6}>
        <div className="max-w-4xl mx-auto w-full">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`w-full mb-6 flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg px-4 py-3 max-w-[80%] text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      <Box className=" p-4  sticky bottom-0">
        <div className="max-w-4xl mx-auto flex gap-2">
          <Textarea
            placeholder="Send a message..."
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            autosize
            minRows={1}
            maxRows={6}
            className="flex-grow resize-none scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
          />
          <Button variant="filled" onClick={sendMessage}>
            Send
          </Button>
        </div>
      </Box>
    </Box>
  );
}
