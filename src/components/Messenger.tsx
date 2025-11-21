import React, { useState } from "react";
import "./Messenger.css";

interface MessengerProps {
  onSend: (text: string) => Promise<void> | void;
}

export const Messenger = ({ onSend }: MessengerProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter without Shift → Send message
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <form className="messenger" onSubmit={handleSubmit}>
      <textarea
        placeholder="Type message here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="chat-button" type="submit">
        Send
      </button>
    </form>
  );
};
