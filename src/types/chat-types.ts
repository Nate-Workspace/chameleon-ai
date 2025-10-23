export type Chat = {
  id: string;
  title: string;
  folderId: string | null;
  lastMessageAt: string;
  createdAt: string;
  active?: boolean;
};