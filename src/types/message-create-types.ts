export type CreateMessageProp = {
  id?: string;
  chatId: string;
  sender: "user" | "ai";
  content: string;
};
