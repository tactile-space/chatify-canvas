
import { useNavigate } from "react-router-dom";
import { Search, Users, Plus, MessageSquarePlus } from "lucide-react";
import { chats } from "@/data/chats";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ChatList = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-white border-r">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-semibold mb-4">Messages</h1>
        <div className="flex gap-2 mb-4">
          <Button
            variant="outline"
            className="flex-1 gap-2"
            onClick={() => navigate("/random-chat")}
          >
            <MessageSquarePlus size={20} />
            Random Chat
          </Button>
          <Button
            variant="outline"
            className="flex-1 gap-2"
            onClick={() => navigate("/room")}
          >
            <Users size={20} />
            Room
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
            onClick={() => navigate(`/chat/${chat.id}`)}
          >
            <Avatar className="h-12 w-12">
              <AvatarImage src={chat.user.avatar} />
              <AvatarFallback>{chat.user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{chat.user.name}</h3>
                <span className="text-sm text-gray-500">
                  {chat.lastMessage.timestamp}
                </span>
              </div>
              <p className="text-sm text-gray-600 truncate">
                {chat.lastMessage.content}
              </p>
            </div>
            {chat.unread && (
              <div className="w-2.5 h-2.5 rounded-full bg-chat-unread flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
