
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Paperclip, Send, Mic } from "lucide-react";
import { messages } from "@/data/chats";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export const ChatWindow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(messages[id || ""] || []);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now().toString(),
      content: newMessage,
      senderId: "current",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChatMessages((prev) => [...prev, message]);
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!id) return null;

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex items-center p-4 bg-white border-b">
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={24} />
          </Button>
        )}
        <Avatar className="h-10 w-10">
          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${id}`} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <h2 className="font-semibold">User {id}</h2>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.senderId === "current" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.senderId === "current"
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
              >
                <p className="break-words">{message.content}</p>
                <span
                  className={`text-xs ${
                    message.senderId === "current"
                      ? "text-blue-100"
                      : "text-gray-500"
                  } block mt-1`}
                >
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Paperclip size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Mic size={20} />
          </Button>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 h-10 px-4 py-2 resize-none border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ minHeight: "40px" }}
          />
          <Button onClick={handleSend} disabled={!newMessage.trim()}>
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};
