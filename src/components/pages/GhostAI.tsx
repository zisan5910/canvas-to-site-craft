
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { format } from 'date-fns';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const GhostAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getConstantReply = (userInput: string): string | null => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello there! I'm Ghost AI, here to tell you about Md Ridoan Mahmud Zisan. How can I help you today?\n\nYou can ask about:\n- His education\n- Skills\n- Projects\n- Certifications\n- Volunteer work\n- Contact information\n- Or anything else!";
    }

    if (lowerInput.includes('developer') || lowerInput.includes('creator') || lowerInput.includes('who made you') || lowerInput.includes('your creator') || lowerInput.includes('zisan') || lowerInput.includes('ridoan')) {
      return `I was created by Md Ridoan Mahmud Zisan, a passionate web developer and student from Bogura, Bangladesh. \n\nHere's some info about him:\n- 📫 Contact: ridoan.zisan@gmail.com\n- 📞 Phone: +8801712525910\n- 📍 Location: Bogura, Bangladesh\n- 🔗 LinkedIn: https://linkedin.com/in/ridoan2007`;
    }

    if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('school') || lowerInput.includes('college')) {
      return `Md Ridoan Mahmud Zisan's Education:\n🎓 Higher Secondary Certificate (HSC)\n- Institution: Karatoa Multimedia School and College\n- Year: 2023-2024\n- GPA: 5.00/5.00 (Science)\n\n🎓 Secondary School Certificate (SSC)\n- Institution: Dhunat Govt N.U. Pilot Model High School\n- Year: 2021-2022\n- GPA: 5.00/5.00 (Science)`;
    }

    if (lowerInput.includes('skill') || lowerInput.includes('expertise') || lowerInput.includes('what can you do') || lowerInput.includes('ability')) {
      return `Md Ridoan Mahmud Zisan's Skills:\n💻 Technical Skills:\n- Web Development (HTML, CSS, JavaScript)\n- React.js, Firebase\n- AI & Machine Learning basics\n\n🗣️ Language Skills:\n- Bengali (Fluent)\n- English (Professional)`;
    }

    if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('build') || lowerInput.includes('developed')) {
      return `Md Ridoan Mahmud Zisan's Notable Projects:\n🩸 BOBDO (Bogura Online Blood Donation Organization)\n- React + Firebase blood management system\n- Link: https://bobdo.netlify.app\n\n📐 UniConverter\n- Unit converter supporting 50+ measurement categories\n- Link: https://uniconverter.netlify.app`;
    }

    if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
      return "You're welcome! Let me know if you need any more information about Md Ridoan Mahmud Zisan.";
    }

    return null;
  };

  const callAPI = async (prompt: string) => {
    setIsLoading(true);

    // Check for constant replies first
    const constantReply = getConstantReply(prompt);
    if (constantReply) {
      return constantReply;
    }

    try {
      const apiUrl = 'https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQm5HUEtMSjJkakVjcF9IQ0M0VFhRQ0FmSnNDSHNYTlJSblE0UXo1Q3RBcjFPcl9YYy1OZUhteDZWekxHdWRLM1M1alNZTkJMWEhNOWd4S1NPSDBTWC12M0U2UGc9PQ==';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      return data.status === 'success' ? data.text : 'Sorry, I could not process your request.';
    } catch (error) {
      console.error('API Error:', error);
      return 'Sorry, there was an error processing your request.';
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await callAPI(userMessage.content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I could not connect to the server. Please try again later.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <Button
          onClick={toggleChat}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="icon"
        >
          {isOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          ) : (
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          )}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] max-w-sm sm:w-80 h-80 sm:h-96 animate-fade-in">
          <Card className="h-full shadow-2xl border-2 border-primary/20 flex flex-col">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 sm:p-4 rounded-t-lg">
              <h3 className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                Ghost AI Assistant
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm">Ask me anything about Ridoan!</p>
            </div>
            
            <CardContent className="p-3 sm:p-4 flex-1 flex flex-col">
              <div className="flex-1 bg-gray-50 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4 overflow-y-auto">
                <div className="space-y-2 sm:space-y-3">
                  {messages.length === 0 && (
                    <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                      <p className="text-xs sm:text-sm text-gray-700">
                        👋 Hi! I'm Ghost AI. I can help you learn more about Ridoan's background, 
                        skills, and projects. Feel free to ask me anything!
                      </p>
                    </div>
                  )}

                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start gap-2 sm:gap-3 ${
                        message.role === 'user' ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <div
                        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs ${
                          message.role === 'user' ? 'bg-blue-500' : 'bg-purple-500'
                        }`}
                      >
                        {message.role === 'user' ? (
                          <span className="text-white">U</span>
                        ) : (
                          <span className="text-white">AI</span>
                        )}
                      </div>
                      <div
                        className={`rounded-2xl px-2 sm:px-4 py-1 sm:py-2 max-w-[80%] ${
                          message.role === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        <p className="text-xs sm:text-sm whitespace-pre-wrap">
                          {message.content}
                        </p>
                        <p className="text-xs mt-1 opacity-70">
                          {format(message.timestamp, 'HH:mm')}
                        </p>
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-500 flex items-center justify-center">
                        <span className="text-white text-xs">AI</span>
                      </div>
                      <div className="bg-gray-200 rounded-2xl px-2 sm:px-4 py-1 sm:py-2">
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 animate-spin" />
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex gap-1 sm:gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Ridoan..."
                  className="flex-1 px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  className="bg-blue-500 hover:bg-blue-600 px-2 sm:px-3"
                  disabled={!input.trim() || isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                  ) : (
                    <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default GhostAI;
