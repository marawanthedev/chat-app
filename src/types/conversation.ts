export type MessageText = {
  message: string;
};

type MessageAudio = {
  length: string;
};

export type Conversation = {
  name: string;
  type: 'text' | 'audio' | 'photo';
  lastMessageAt: string;
  delivered: boolean;
  read: boolean;
} & (
  | { type: 'text'; text: MessageText; audio?: never }
  | { type: 'audio'; audio: MessageAudio; text?: never }
  | { type: 'photo'; text?: never; audio?: never }
);

export type ConversationListResponse = {
  conversations: Conversation[];
};
