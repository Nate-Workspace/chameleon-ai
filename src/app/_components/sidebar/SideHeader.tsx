import { Box, Flex, Group, Text } from "@mantine/core";
import React from "react";
import ThemeToggler from "./ThemeToggler";

const SideHeader = () => {
  return (
    <Flex className="w-full flex justify-between items-center border border-gray-500 rounded-sm px-4 py-2">
      <p>Chameleon ai</p>
      <div>
        <ThemeToggler />
      </div>
    </Flex>
  );
};

export default SideHeader;
