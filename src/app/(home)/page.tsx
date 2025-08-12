'use client'

import ScreenWrapper from "../_components/ScreenWrapper";
import { Button } from "@mantine/core";
import { createUserAction } from "./create-user-action";

export default function Home() {
  const onButtonClick = async () => {
    const response = await createUserAction();
    console.log("User created:", response);
  }
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-4">Welcome to Chameleon AI</h1>
      <p className="text-lg text-center max-w-md">
        This is a Next.js application designed to showcase the capabilities of
        Chameleon AI. Explore the features and functionalities we offer.
      </p>
      <Button variant="filled" onClick={onButtonClick}> Add to database </Button>
    </div>
  );
}
