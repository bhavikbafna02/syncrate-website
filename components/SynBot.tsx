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
        className="fixed bottom-6 right-6 z-50 btn-primary rounded-full shadow-lg px-6 py-3 font-semibold text-sm transition-transform hover:scale-105"
        aria-label="Open SynBot chat"
      >
        SynBot
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-surface border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
          <div className="p-4 border-b border-border flex items-center justify-between bg-surface-highlight/50">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="font-semibold text-text-primary">SynBot</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-text-tertiary hover:text-text-primary transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm max-h-96 min-h-[300px] bg-background/50">
            {messages.length === 0 && (
              <div className="text-center text-text-tertiary py-12">
                <p className="text-sm">Ask me anything about Syncrate.</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.role === 'user' ? 'text-right' : 'text-left'}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg text-sm max-w-[85%] text-left ${msg.role === 'user'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-surface border border-border text-text-primary'
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-left">
                <span className="inline-block px-4 py-2 rounded-lg bg-surface border border-border text-text-tertiary text-sm">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                  </span>
                </span>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-border bg-surface flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder-text-tertiary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="btn-primary px-4 py-2 rounded-lg text-sm disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
