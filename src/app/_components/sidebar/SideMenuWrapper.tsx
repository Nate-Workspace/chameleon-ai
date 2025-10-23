import SideMenu from "./SideMenu";

export default async function SideMenuWrapper() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/chats`, {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch chats');
  }
  const data = await response.json();
  const folders = [
    { id: "f1", name: "Work chats", color: "bg-green-500" },
    { id: "f2", name: "Life chats", color: "bg-purple-400" },
    { id: "f3", name: "Projects chats", color: "bg-orange-400" },
    { id: "f4", name: "Clients chats", color: "bg-blue-400" },
  ];

  return <SideMenu folders={folders} chats={data.chats} />;
}
