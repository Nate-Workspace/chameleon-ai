import React from "react";
import { Search } from "lucide-react"

type Folder = { id: string; name: string; color: string };
type Chat = { id: string; title: string; updatedAt?: string; active?: boolean };

const defaultFolders: Folder[] = [
  { id: "f1", name: "Work chats", color: "bg-green-500" },
  { id: "f2", name: "Life chats", color: "bg-purple-400" },
  { id: "f3", name: "Projects chats", color: "bg-orange-400" },
  { id: "f4", name: "Clients chats", color: "bg-blue-400" },
];

const defaultChats: Chat[] = [
  { id: "c1", title: "Landing page copy", updatedAt: "2h ago", active: true },
  { id: "c2", title: "API error logs", updatedAt: "Yesterday" },
  { id: "c3", title: "Q3 marketing ideas", updatedAt: "Aug 10" },
  { id: "c4", title: "Client meeting notes", updatedAt: "Aug 08" },
  { id: "c5", title: "Client meeting notes", updatedAt: "Aug 08" },
  { id: "c6", title: "Client meeting notes", updatedAt: "Aug 08" },
  { id: "c7", title: "Client meeting notes", updatedAt: "Aug 08" },
  { id: "c8", title: "Client meeting notes", updatedAt: "Aug 08" },
  { id: "c9", title: "Client meeting notes", updatedAt: "Aug 08" },
];

export default function SideMenu({
  folders = defaultFolders,
  chats = defaultChats,
}: {
  folders?: Folder[];
  chats?: Chat[];
}) {
  return (
    <aside
      className="
        w-80 h-full
        bg-[#1f1f1f] border-r border-gray-800
        flex flex-col
      "
    >
      {/* ===== Header (separate) ===== */}
      <div className="shrink-0 border-b border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center">
              <span className="text-green-500 text-lg leading-none">◎</span>
            </div>
            <span className="text-white font-medium">My Chats</span>
          </div>

          <button
            type="button"
            aria-label="Sidebar menu"
            className="text-gray-400 hover:text-white transition"
          >
            ⋮
          </button>
        </div>
      </div>

      {/* ===== Body (scrollable) ===== */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Search */}
        <div className="p-3 pb-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="
                w-full rounded-md bg-[#2a2a2a]
                pl-9 pr-3 py-2 text-sm
                text-white placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-green-500
              "
            />
            <span className="absolute left-2 top-2.5 text-gray-400"><Search size={18}/></span>
          </div>
        </div>

        {/* Scroll area hosts: Folders + Chats */}
        <div className="flex-1 overflow-y-auto px-3 space-y-6 custom-scrollbar">
          {/* Folders */}
          <section>
            <h3 className="text-gray-400 text-[10px] uppercase tracking-[0.12em] mb-2">
              Folders
            </h3>
            <ul className="space-y-2">
              {folders.map((folder) => (
                <li key={folder.id}>
                  <button
                    type="button"
                    className="
                      w-full flex items-center justify-between
                      bg-[#2a2a2a] hover:bg-[#252525]
                      rounded-md px-3 py-2 transition group
                    "
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-6 rounded-full ${folder.color}`} />
                      <span className="text-white text-sm">{folder.name}</span>
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition">⋮</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Chats */}
          <section>
            <h3 className="text-gray-400 text-[10px] uppercase tracking-[0.12em] mb-2">
              Chats
            </h3>
            <ul className="space-y-1.5">
              {chats.map((chat) => (
                <li key={chat.id}>
                  <button
                    type="button"
                    className={`
                      w-full flex items-center justify-between rounded-md px-3 py-2 text-left transition group
                      ${chat.active ? "bg-[#2a2a2a]" : "hover:bg-[#2a2a2a]/70"}
                    `}
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm text-white">{chat.title}</p>
                      {chat.updatedAt && (
                        <p className="text-[11px] text-gray-500 mt-0.5">{chat.updatedAt}</p>
                      )}
                    </div>
                    <span className="text-gray-500 opacity-0 group-hover:opacity-100 transition">
                      ⋮
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer action */}
        <div className="p-3 border-t border-gray-800">
          <button
            type="button"
            className="
              w-full flex items-center justify-center gap-2
              bg-green-500 text-black font-medium
              rounded-md py-2 hover:bg-green-600 transition
            "
          >
            <span>＋</span>
            <span>New chat</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
