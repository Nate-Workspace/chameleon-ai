"use client";
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ThemeToggler() {
  const computedColorScheme = useComputedColorScheme('dark');
    const {setColorScheme} = useMantineColorScheme();
  const toggle = () =>
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");

  return (
    <ActionIcon
      variant="outline"
      color={computedColorScheme === "dark" ? "yellow" : "blue"}
      onClick={toggle}
      title="Toggle color scheme"
      size="lg"
      aria-label="Toggle theme"
    >
      {computedColorScheme === "dark" ? <IconSun /> : <IconMoon />}
    </ActionIcon>
  );
}