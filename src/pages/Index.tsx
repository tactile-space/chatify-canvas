
import { ChatList } from "@/components/chat/ChatList";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { useParams } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const { id } = useParams();
  const isMobile = useIsMobile();

  if (isMobile) {
    return id ? <ChatWindow /> : <ChatList />;
  }

  return (
    <div className="flex h-screen">
      <div className="w-[400px] flex-shrink-0">
        <ChatList />
      </div>
      <div className="flex-1">
        {id ? (
          <ChatWindow />
        ) : (
          <div className="h-full flex items-center justify-center bg-gray-50">
            <p className="text-gray-500">Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
