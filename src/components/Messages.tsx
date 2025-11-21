import React, { useEffect, useRef } from "react";
import { Message } from "./Message";
import type { ChatMessage } from "../models/ChatMessage";

interface MessagesProps {
  messages: ChatMessage[];
}

export const Messages = ({ messages }: MessagesProps) => {
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="chatBody" ref={chatBodyRef}>
      {messages.map((msg) => (
        <Message
          key={msg.id}
          messageType={msg.messageType}
          messageText={msg.messageText}
        />
      ))}
    </div>
  );
};
