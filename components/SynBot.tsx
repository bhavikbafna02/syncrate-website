'use client';

import { useState } from 'react';

type Message = {
  role: 'user' | 'bot';
  content: string;
};

export default function SynBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/synbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response');
      }

      const data = await res.json();

      setMessages(prev => [
        ...prev,
        { role: 'bot', content: data.reply },
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'bot', content: 'Sorry, something went wrong.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white px-5 py-3 rounded-full shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all hover:scale-105 font-semibold text-sm"
        aria-label="Open SynBot chat"
      >
        SynBot
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-slate-950 border border-slate-700/70 rounded-2xl shadow-2xl flex flex-col backdrop-blur-md glass">
          <div className="p-4 border-b border-slate-700/70 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">SynBot</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm max-h-96">
            {messages.length === 0 && (
              <div className="text-center text-slate-400 py-8">
                <p className="text-sm">Ask me anything about Syncrate!</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.role === 'user' ? 'text-right' : 'text-left'}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      : 'bg-slate-800/80 text-slate-200 border border-slate-700/50'
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}

            {loading && (
              <div className="text-left">
                <span className="inline-block px-4 py-2 rounded-xl bg-slate-800/80 text-slate-400 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                  </span>
                </span>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-700/70 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask SynBot…"
              className="flex-1 bg-slate-900/70 border border-slate-700/70 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/25 outline-none transition-all"
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2.5 rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
