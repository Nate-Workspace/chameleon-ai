import { getChats } from "@/db/orm/chat/get-all-chats";
import SideMenu from "./SideMenu";
import { getFolders } from "@/db/orm/folder/get-all-folders";

export default async function SideMenuWrapper() {
  const chats = await getChats();
  const folders = await getFolders();

  return <SideMenu folders={folders} chats={chats} />;
}
