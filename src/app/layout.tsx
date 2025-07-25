import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { MantineProvider, Box, createTheme } from '@mantine/core';
import SideMenu from "./_components/SideMenu";
import "./globals.css";
import '@mantine/core/styles.css';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chameleon AI",
  description: "A Next.js app for Chameleon AI",
};

const theme = createTheme({
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <MantineProvider  theme= {theme} defaultColorScheme="dark">
        <Box className="container mx-auto flex h-full gap-4">
          <Box className="hidden md:block">
            <SideMenu />
          </Box>
          <Box className="grow">{children}</Box>
        </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
