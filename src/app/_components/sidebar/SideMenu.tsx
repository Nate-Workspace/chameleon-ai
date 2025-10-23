"use client";

import React, { useEffect, useState } from "react";
import { FolderOpen, Plus, Search } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import { formatTimeAgo } from "@/utils/timeFormats";
import { Chat } from "@/types/chat-types";
import { Folder } from "@/types/folder-types";
import { useRouter, usePathname } from "next/navigation";

export default function SideMenu({
  folders,
  chats,
}: {
  folders: Folder[];
  chats: Chat[];
}) {
  const router = useRouter();
  const pathName = usePathname();
  const activeChatId = pathName?.split("/").pop();

  const colors = [
    "bg-purple-400",
    "bg-green-500",
    "bg-orange-400",
    "bg-blue-400",
  ];

  const handleChatClick = (chatId: string) => {
    router.push(chatId);
  };

  const onNewChatClicked = () => {
    router.push("/");
  };

  return (
    <aside className="w-80 h-full bg-[#1f1f1f] border-r border-gray-800 flex flex-col">
      <div className="shrink-0 border-b border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center">
              <span className="text-green-500 text-lg leading-none">◎</span>
            </div>
            <span className="text-white font-medium">My Chats</span>
          </div>
          <ThemeToggler />
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        <div className="p-3 pb-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-md bg-[#2a2a2a] pl-9 pr-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <span className="absolute left-2 top-2.5 text-gray-400">
              <Search size={18} />
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 space-y-6 custom-scrollbar">
          {/* Folders */}
          <section>
            <h3 className="text-gray-400 text-[10px] uppercase tracking-[0.12em] mb-2">
              Folders
            </h3>
            {folders.length > 0 ? (
              <ul className="space-y-2">
                {folders.map((folder) => (
                  <li key={folder.id}>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between bg-[#2a2a2a] hover:bg-[#252525] rounded-md px-3 py-2 transition group"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-6 rounded-full ${colors[0]}`}
                        />
                        <span className="text-white text-sm">
                          {folder.name}
                        </span>
                      </div>
                      <span className="text-gray-400 group-hover:text-white transition">
                        ⋮
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="bg-[#2a2a2a]/30 rounded-md px-4 py-6 text-center border border-dashed border-gray-700">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <span className="text-gray-500 text-xl"><FolderOpen size={28} className="text-gray-600" /></span>
                  </div>
                  <p className="text-gray-400 text-sm">No folders yet</p>
                  <p className="text-gray-500 text-xs">
                    Create one to organize your chats
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Chats */}
          <section>
            <h3 className="text-gray-400 text-[10px] uppercase tracking-[0.12em] mb-2">
              Chats
            </h3>
            {chats.length > 0 ? (
              <ul className="space-y-1.5">
                {chats?.map((chat) => (
                  <li key={chat.id}>
                    <button
                      type="button"
                      className={`w-full flex items-center justify-between rounded-md px-3 py-2 text-left transition group ${
                        activeChatId === chat.id
                          ? "bg-[#2a2a2a]"
                          : "hover:bg-[#2a2a2a]/70"
                      }`}
                      onClick={() => {
                        handleChatClick(chat.id);
                      }}
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm text-white">
                          {chat.title}
                        </p>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          {formatTimeAgo(chat.lastMessageAt)}
                        </p>
                      </div>
                      <span className="text-gray-500 opacity-0 group-hover:opacity-100 transition hover:cursor-pointer">
                        ⋮
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="bg-[#2a2a2a]/30 rounded-md px-4 py-6 text-center border border-dashed border-gray-700">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <span className="text-gray-500 text-xl">📁</span>
                  </div>
                  <p className="text-gray-400 text-sm">No Chats yet</p>
                  <p className="text-gray-500 text-xs">
                    Create one to start messaging
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* Footer action */}
        <div className="p-3 border-t border-gray-800 ">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-black font-medium rounded-md py-2 hover:bg-green-600 transition hover:cursor-pointer"
            onClick={onNewChatClicked}
          >
            <Plus size={18} />
            <span>New chat</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
