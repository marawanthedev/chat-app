export type ChatMessage = {
  type: 'text' | 'photo';
  delivered: boolean;
  read: boolean;
  sentBy: 'self' | 'other';
  sentAt: string;
} & (
  | { type: 'text'; text: string; photo?: never }
  | { type: 'photo'; photo?: string; text?: never }
);

export type ChatContact = {
  name: string;
};
export type ChatProps = {
  contact: ChatContact;
  messages: ChatMessage[];
};
