# ChatScreen

A fully functional AI chat application built with **React**,
**TypeScript**, and **hand-crafted custom CSS** --- no UI frameworks
required.

ChatScreen allows users to chat directly with **ChatGPT** in real time.
It includes full message handling, request/response streaming, chat
history, and a polished, responsive layout.\
This project demonstrates how to build a complete ChatGPT-powered app
from scratch using modern React patterns and clean custom UI design.

---

## 🚀 Features

### 🤖 **ChatGPT Integration**

- Send messages and receive responses from ChatGPT through the OpenAI
  API.
- Clean request handling with async/await + error management.
- Optional typing indicator while waiting for AI response.

### 💬 **Real Chat Interface**

- Two-sided chat bubbles (User vs ChatGPT).
- Smooth scrolling to the latest message.
- Simple and intuitive message input bar.

### 🎨 **Hand-Crafted Custom CSS**

- Fully responsive layout (mobile → tablet → desktop).
- No Tailwind, no Bootstrap, no Material UI --- **every pixel styled
  by hand**.
- Modern, minimal interface built with pure CSS modules (or global
  styles).

### 🧠 **Built With Modern React**

- Functional components
- React hooks (`useState`, `useEffect`, `useRef`)
- TypeScript strict typing
- Clean component architecture

### 📦 **Lightweight & Fast**

- No heavy UI frameworks\
- Minimal dependencies\
- Optimized rendering\
- Great for learning or using as a starting point for a real chat app

---

## 🛠️ Tech Stack

Category Tools

---

Frontend React, TypeScript
Styling Custom CSS (no frameworks)
AI Model OpenAI Chat Completions API
Build Tool Vite or Create React App

---

## 📁 Folder Structure (Example)

    src/
     ├── components/
     │    ├── ChatScreen.tsx
     │    ├── MessageList.tsx
     │    ├── MessageInput.tsx
     │    └── MessageBubble.tsx
     ├── styles/
     │    ├── chat.css
     │    └── layout.css
     ├── hooks/
     │    └── useChat.ts
     ├── api/
     │    └── openai.ts
     ├── App.tsx
     └── main.tsx

---

## 🔧 Setup & Installation

1.  **Clone the repository**

```bash
git clone https://github.com/your-username/chatscreen.git
cd chatscreen
```

2.  **Install dependencies**

```bash
npm install
```

3.  **Create a `.env` file**

```{=html}
<!-- -->
```

    VITE_OPENAI_API_KEY=your_api_key_here

4.  **Run the app**

```bash
npm run dev
```

---

## 📡 Environment Variables

Variable Description

---

`VITE_OPENAI_API_KEY` Your OpenAI API key for chat responses

---

## 🧪 Example Chat Flow

1.  User types a message\
2.  The app sends the message to the OpenAI API\
3.  A typing indicator appears\
4.  ChatGPT responds and the message is added to the chat\
5.  UI auto-scrolls to the latest message

---

## 🎯 Purpose of This Project

ChatScreen demonstrates:

- How to build a **full AI chat app** with clean architecture\
- How to integrate ChatGPT using **TypeScript**\
- How to design a modern UI using **pure CSS**\
- How to handle async chat flows and message state

Perfect for portfolios, teaching, or using as a template for a
production AI chat interface.

---

## 📄 License

MIT License --- you are free to modify, reuse, and build upon this
project.

---

## 🙌 Contributing

Pull requests, improvements, and new features are welcome.
