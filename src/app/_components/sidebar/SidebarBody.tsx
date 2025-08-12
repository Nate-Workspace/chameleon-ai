import React from "react";
import { Flex, Stack, Box, Text } from "@mantine/core";
import { SearchEntity } from "../entity/SearchEntity";
import { IconChevronDown, IconFolder, IconPlus } from "@tabler/icons-react";

const SidebarBody = () => {
  return (
    <Stack className="w-full flex-1 items-start p-4 border border-gray-500 rounded-sm">
      <Box className="grow w-full flex flex-col gap-4">
        <SearchEntity placeholder="Search a chat or a folder." />
        <Flex direction="row" justify="space-between" align="center">
          <Text>Folders</Text>
          <Flex direction="row" gap={8}>
            <div className="hover:cursor-pointer">
              <IconPlus size={18} />
            </div>
            <div className="hover:cursor-pointer">
              <IconChevronDown size={18} />
            </div>
          </Flex>
        </Flex>

        {/* Folders list here */}
        <Stack className="w-full" gap={8}>
          <Flex
            className="w-full items-center justify-between bg-gray-400 rounded-sm overflow-hidden"
            direction="row"
          >
            <Box className="h-full w-1 bg-blue-400"></Box>
            <Flex direction="row" align="center" gap={8} className="flex-1 py-3 px-2">
              <IconFolder size={20} />
              <Text>Folder 1</Text>
            </Flex>
          </Flex>
          <Flex
            className="w-full items-center justify-between bg-gray-400 rounded-sm overflow-hidden"
            direction="row"
          >
            <Box className="h-full w-1 bg-yellow-400"></Box>
            <Flex direction="row" align="center" gap={8} className="flex-1 py-3 px-2">
              <IconFolder size={20} />
              <Text>Folder 1</Text>
            </Flex>
          </Flex>
          <Flex
            className="w-full items-center justify-between bg-gray-400 rounded-sm overflow-hidden"
            direction="row"
          >
            <Box className="h-full w-1 bg-green-400"></Box>
            <Flex direction="row" align="center" gap={8} className="flex-1 py-3 px-2">
              <IconFolder size={20} />
              <Text>Folder 1</Text>
            </Flex>
          </Flex>
        </Stack>

        {/* Chats */}
        <Flex direction="row" justify="space-between" align="center">
          <Text>Chats</Text>
          <Flex direction="row" gap={8}>
            <div className="hover:cursor-pointer">
              <IconPlus size={18} />
            </div>
            <div className="hover:cursor-pointer">
              <IconChevronDown size={18} />
            </div>
          </Flex>
        </Flex>
        <Stack className="w-full" gap={8}>
          <Flex
            className="w-full items-center justify-between py-2 px-2 bg-gray-400 rounded-sm"
            direction="row"
          >
            <Flex direction="row" align="center" gap={8}>
              <IconFolder size={20} />
              <Text>Folder 1</Text>
            </Flex>
          </Flex>
          <Flex
            className="w-full items-center justify-between py-2 px-2 bg-gray-400 rounded-sm"
            direction="row"
          >
            <Flex direction="row" align="center" gap={8}>
              <IconFolder size={20} />
              <Text>Folder 1</Text>
            </Flex>
          </Flex>
          <Flex
            className="w-full items-center justify-between py-2 px-2 bg-gray-400 rounded-sm"
            direction="row"
          >
            <Flex direction="row" align="center" gap={8}>
              <IconFolder size={20} />
              <Text>Folder 1</Text>
            </Flex>
          </Flex>
        </Stack>
      </Box>
    </Stack>
  );
};

export default SidebarBody;
