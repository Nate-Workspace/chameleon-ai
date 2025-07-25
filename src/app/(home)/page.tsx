import Image from "next/image";
import ScreenWrapper from "../_components/ScreenWrapper";
import { Button } from "@mantine/core";

export default function Home() {
  return (
    <ScreenWrapper>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to Chameleon AI</h1>
        <p className="text-lg text-center max-w-md">
          This is a Next.js application designed to showcase the capabilities of
          Chameleon AI. Explore the features and functionalities we offer.
        </p>
        <Button variant="filled" > someone </Button>
        </div>
    </ScreenWrapper>
  );
}
