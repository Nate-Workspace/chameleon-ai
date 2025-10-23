"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { Box, Textarea, Button, ScrollArea } from "@mantine/core";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { createMessageAction } from "./actions/create-message-action";
import {
  CreateMessageProp,
  getMessagesType,
} from "@/types/message-create-types";
import { notify } from "../_components/notification/notify";
import { revalidatePath } from "next/cache";
import { revalidateChat } from "@/utils/revalidate";

export default function ChatArea(props: {
  messages: getMessagesType[];
  id: string;
}) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sending, startSending] = useTransition();
  const messages = props.messages;
  const id = props.id;

  const sendMessage = async () => {
    if (!input.trim()) return;

    startSending(async () => {
      console.log("Message sending...");

      const recentHistory = messages.slice(-20).map((m) => ({
        role: m.sender === "user" ? "user" : "model",
        content: m.body,
      }));

      const res = await axios.post("/api/ai/gemini", {
        prompt: input,
        history: recentHistory,
      });
      console.log("response in chat area: ", res);

      if (res.status !== 200) {
        notify("Error", "Something went wrong. Please try again.");
        console.error("API call failed");
        return;
      }

      const userMessage$ = createMessageAction({
        chatId: id,
        sender: "user",
        body: input,
      });
      const message$ = createMessageAction({
        chatId: id,
        sender: "ai",
        body: res.data,
      });

      const [userMessage, message] = await Promise.all([
        userMessage$,
        message$,
      ]);

      console.log("response in chat area: ", res.data);
      if (!message.id || !userMessage.id) {
        notify("Error", "Something went wrong. Please try again.");
        console.error("DB message write failed");
        return;
      }
      console.log("Message stored in DB: ", message, userMessage);

      await revalidateChat(`/chat/${id}`);
    });

    setInput("");
  };

  // const copyToClipboard = async (text: string) => {
  //   try {
  //     await navigator.clipboard.writeText(text);
  //     notify("Success", "Message copied to clipboard!");
  //   } catch (err) {
  //     notify("Error", "Failed to copy message");
  //   }
  // };

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
                    ? "bg-gray-500 text-white"
                    : "bg-transparent text-gray-100"
                }`}
              >
                <ReactMarkdown
                  key={msg.id + "-md"}
                  components={{
                    code: ({ className, children, inline, ...props }: any) => {
                      const isInline = !!inline; // Ensure it's treated as a boolean
                      const match = /language-(\w+)/.exec(className || "");
                      return !isInline ? (
                        <pre className="bg-gray-900 p-3 rounded-lg overflow-x-auto text-xs my-2">
                          <code className={className} {...props}>
                            {children}
                          </code>
                        </pre>
                      ) : (
                        <code
                          className="bg-gray-700 text-yellow-300 px-1 py-0.5 rounded text-xs"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {msg?.body}
                </ReactMarkdown>
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
