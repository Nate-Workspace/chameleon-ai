export type CreateMessageProp = {
  id: string;
  sender: "user" | "ai";
  content: string;
};
