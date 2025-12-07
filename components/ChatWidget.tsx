import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose, onOpen }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Halo! Saya asisten virtual Happy Pet Clinic Jambi 🐶🐱. \n\nKami melayani UGD 24 Jam, USG, Operasi, dan Grooming. \n\nAda yang bisa saya bantu terkait kesehatan hewan Anda?',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for Gemini
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToGemini(history, userMsg.text);

      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: 'Maaf, terjadi kesalahan. Silakan coba lagi.',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={onOpen}
        className="fixed bottom-6 right-6 h-16 w-16 bg-teal-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-teal-700 transition-all z-50 animate-bounce"
        aria-label="Open Chat"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-sm md:max-w-md h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-slate-200 overflow-hidden ring-1 ring-slate-900/5">
      {/* Header */}
      <div className="bg-teal-600 p-4 flex justify-between items-center text-white">
        <div className="flex items-center space-x-2">
          <div className="bg-white/20 p-1.5 rounded-full">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Happy Pet AI Assistant</h3>
            <p className="text-xs text-teal-100 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
              Online
            </p>
          </div>
        </div>
        <button onClick={onClose} className="hover:bg-white/10 p-1 rounded transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                msg.role === 'user'
                  ? 'bg-teal-600 text-white rounded-tr-none'
                  : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
              }`}
            >
              {msg.role === 'model' && (
                <div className="mb-1 text-xs font-bold text-teal-600 uppercase tracking-wide flex items-center gap-1">
                   <Bot size={12}/> Happy Pet AI
                </div>
              )}
              <div className="whitespace-pre-wrap">{msg.text}</div>
              <div className={`text-[10px] mt-1 text-right ${msg.role === 'user' ? 'text-teal-100' : 'text-slate-400'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Tanya tentang kesehatan hewan..."
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-2 text-[10px] text-center text-slate-400">
          Untuk kondisi gawat darurat, segera bawa ke UGD Happy Pet Clinic.
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;