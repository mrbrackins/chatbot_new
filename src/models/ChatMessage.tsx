import { MessageType } from "./MessageType";

export interface ChatMessage {
  id: string;
  messageText: string;
  messageType: MessageType; // Sent or Received
}
