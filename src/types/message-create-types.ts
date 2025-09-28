export type CreateMessageProp = {
  id?: string;
  chatId: string;
  sender: "user" | "ai";
  body?: string;
  image?: string;
};

export type getMessagesType ={
  id:string,
  chatId:string,
  sender:"user" | "ai",
  body:string,
  image: string,
}
