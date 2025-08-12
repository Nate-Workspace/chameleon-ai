import { Stack } from "@mantine/core";
import React from "react";
import SideHeader from "./SideHeader";
import SidebarBody from "./SidebarBody";

const SideMenu = () => {
  return (
    <Stack
      w={380}
      h="100%"
      className=" w-full p-4 flex flex-col gap-4"
    >
      <SideHeader />
      <SidebarBody />
    </Stack>
  );
};

export default SideMenu;
