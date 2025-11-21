import React from "react";
import "./Message.css";

import { MessageType } from "../models/MessageType";

interface SentMessage {
  messageType: MessageType.Sent;
  messageText: string;
}

interface ReceivedMessage {
  messageType: MessageType.Received;
  messageText: string;
}

type MessageProps = SentMessage | ReceivedMessage;

export const Message = ({ messageType, messageText }: MessageProps) => {
  switch (messageType) {
    case MessageType.Received:
      return (
        <div className="received">
          <div className="icon"></div>
          <div className="message">{messageText}</div>
        </div>
      );

    case MessageType.Sent:
      return (
        <div className="sent">
          <div className="message">{messageText}</div>
          <div className="icon"></div>
        </div>
      );

    default:
      return null;
  }
};
