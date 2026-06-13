# 🤖 Gemini AI Discord Bot

An AI-powered Discord chatbot built with **Discord.js** and **Google Gemini API**. The bot can understand both **text messages** and **images**, allowing users to interact with AI directly inside Discord.

---

## ✨ Features

- 💬 AI-powered text conversations
- 🖼️ Image understanding and analysis
- ⚡ Fast and real-time responses
- 🔒 Secure API key management using environment variables
- 🤝 Discord integration with Discord.js
- 📷 Supports image attachments
- 🚀 Easy deployment

---

## 🛠️ Tech Stack

- Node.js
- Discord.js
- Google Gemini API
- JavaScript

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Anthropic_Ai_bot.git
cd Anthropic_Ai_bot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root directory:

```env
DISCORD_TOKEN=your_discord_bot_token
GEMINI_API_KEY=your_gemini_api_key
```

---

## 🚀 Run the Bot

```bash
node server.js
```

or

```bash
npm start
```

---

## 📂 Project Structure

```text
├── server.js
├── package.json
├── .env
├── node_modules
└── README.md
```

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| DISCORD_TOKEN | Discord Bot Token |
| GEMINI_API_KEY | Google Gemini API Key |

---

## 💬 Example Usage

### Text Chat

**User**
```
Hello AI
```

**Bot**
```
Hello! How can I help you today?
```

### Image Analysis

**User**
```
Describe this image
```

*(Uploads an image)*

**Bot**
```
This image contains palm trees in a minimalist vector-art style with warm colors and a tropical atmosphere.
```

---

## ⚙️ How It Works

1. User sends a message or image in Discord.
2. Bot receives the content using Discord.js.
3. Images are converted into Base64 format.
4. Text and image data are sent to Gemini AI.
5. Gemini generates a response.
6. Bot replies back in Discord.

---



## 🌐 Deployment

This bot can be deployed on:

- Render


---
---

⭐ If you found this project helpful, don't forget to star the repository!
