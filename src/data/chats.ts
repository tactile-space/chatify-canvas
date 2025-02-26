
export interface Message {
  id: string;
  content: string;
  senderId: string;
  timestamp: string;
}

export interface Chat {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  lastMessage: Message;
  unread: boolean;
}

export const chats: Chat[] = [
  {
    id: "1",
    user: {
      id: "u1",
      name: "Alice Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    },
    lastMessage: {
      id: "m1",
      content: "Hey, how are you doing today?",
      senderId: "u1",
      timestamp: "10:30 AM",
    },
    unread: true,
  },
  {
    id: "2",
    user: {
      id: "u2",
      name: "Bob Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
    },
    lastMessage: {
      id: "m2",
      content: "Did you see the latest updates?",
      senderId: "u2",
      timestamp: "Yesterday",
    },
    unread: false,
  },
  {
    id: "3",
    user: {
      id: "u3",
      name: "Carol White",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carol",
    },
    lastMessage: {
      id: "m3",
      content: "Let's meet for coffee tomorrow!",
      senderId: "u3",
      timestamp: "Yesterday",
    },
    unread: true,
  },
];

export const messages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      content: "Hi there!",
      senderId: "u1",
      timestamp: "10:00 AM",
    },
    {
      id: "2",
      content: "Hello! How can I help you today?",
      senderId: "current",
      timestamp: "10:05 AM",
    },
    {
      id: "3",
      content: "I was wondering if you could help me with something...",
      senderId: "u1",
      timestamp: "10:15 AM",
    },
    {
      id: "4",
      content: "Of course! What do you need help with?",
      senderId: "current",
      timestamp: "10:20 AM",
    },
    {
      id: "5",
      content: "Hey, how are you doing today?",
      senderId: "u1",
      timestamp: "10:30 AM",
    },
  ],
};
