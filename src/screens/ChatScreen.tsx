import React, { type JSX, useState, useEffect } from "react";
import "./ChatScreen.css";
import { ChatHeader } from "../components/ChatHeader";
import { Messages } from "../components/Messages";
import { Messenger } from "../components/Messenger";
import type { ChatMessage } from "../models/ChatMessage";
import { MessageType } from "../models/MessageType";

interface AiResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

function ChatScreen(): JSX.Element {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "start-message-1",
      messageText: "Hi, I’m your AI assistant. How can I help you today?",
      messageType: MessageType.Received,
    },
  ]);

  const handleSend = async (text: string): Promise<void> => {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      messageText: text,
      messageType: MessageType.Sent,
    };

    setMessages((prev) => [...prev, userMessage]);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: text + ", please limit it to one sentence" },
        ],
      }),
    });

    const data: AiResponse = await response.json();

    const aiMessage: ChatMessage = {
      id: crypto.randomUUID(),
      messageText: data.choices[0].message.content,
      messageType: MessageType.Received,
    };

    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <>
      <ChatHeader chatTitle="Live Chat" />
      <Messages messages={messages} />
      <Messenger onSend={handleSend} />
    </>
  );
}

export default ChatScreen;
