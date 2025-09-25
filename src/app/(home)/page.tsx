"use client";

import ScreenWrapper from "../_components/ScreenWrapper";
import { Button, Stack } from "@mantine/core";
import { createUserAction } from "./create-user-action";
import ChatArea from "./chat-area";
import WelcomeScreen from "./WelcomeScreen";

export default function Home() {
  
  return (
    <WelcomeScreen/>
  );
}
