import React, { useState } from 'react';
import { PaperAirplaneIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { sendMessageToIA } from '../services/chat';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
    };

    setMessages([...messages, newMessage]);
    setInput('');

    setTyping(true);

    try {
      const res = await sendMessageToIA(input);

      const aiResponse = {
        id: messages.length + 2,
        text: res.data.reply,  // ← c’est /chatController qui doit renvoyer { reply: ... }
        sender: 'ai',
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error('Erreur IA:', error);
      const errorMsg = {
        id: messages.length + 2,
        text: 'Oops... je n’arrive pas à répondre pour le moment 😢',
        sender: 'ai',
      };
      setMessages((prev) => [...prev, errorMsg]);
    }

    setTyping(false);
  };

  return (
    <div className="flex flex-col h-full w-full bg-noirElegant/80 rounded-2xl shadow-xl p-6 border-2 border-roseClair/40 animate-gradient">
      <div className="flex-1 overflow-y-auto space-y-5 p-4 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'ai' && (
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-roseClair flex items-center justify-center text-noirElegant text-xl mr-2 border-2 border-or">
                💋
              </div>
            )}

            <div
              className={`max-w-sm px-5 py-3 rounded-3xl text-lg break-words transition-all animate-fade-in ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-roseClair to-roseFonce text-black self-end'
                  : 'bg-gradient-to-l from-or to-pourpre text-noirElegant self-start'
              }`}
            >
              {msg.text}
            </div>

            {msg.sender === 'user' && (
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-noirElegant text-xl ml-2 border-2 border-roseClair">
                <UserCircleIcon className="w-8 h-8 text-roseFonce" />
              </div>
            )}
          </div>
        ))}

        {typing && (
          <div className="italic text-roseClair animate-pulse ml-2">L’IA est en train de répondre...</div>
        )}
      </div>

      <form
        onSubmit={handleSend}
        className="mt-6 flex items-center gap-4 border-t border-roseClair/40 pt-4"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Votre message... 💋"
          className="flex-1 p-4 rounded-full bg-white/80 text-black text-lg focus:outline-none focus:ring-2 focus:ring-roseClair"
        />
        <button
          type="submit"
          className="p-4 bg-or text-noirElegant rounded-full hover:bg-roseClair hover:text-noirElegant transition shadow-md"
        >
          <PaperAirplaneIcon className="w-6 h-6 rotate-45" />
        </button>
      </form>
    </div>
  );
}
