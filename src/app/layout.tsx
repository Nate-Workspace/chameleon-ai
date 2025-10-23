import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Box } from "@mantine/core";
import { MantineProviderWrapper } from "../providers/Mantine.provider";
import "./globals.css";
import "@mantine/core/styles.css";
import ScreenWrapper from "./_components/ScreenWrapper";
import SideMenuWrapper from "./_components/sidebar/SideMenuWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chameleon AI",
  description: "A Next.js app for Chameleon AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <MantineProviderWrapper>
          <ScreenWrapper>
            <Box className="mx-auto w-full flex h-full gap-4 overflow-hidden">
              <Box className="hidden md:block">
                <SideMenuWrapper />
              </Box>
              <Box className="grow">{children}</Box>
            </Box>
          </ScreenWrapper>
        </MantineProviderWrapper>
      </body>
    </html>
  );
}
