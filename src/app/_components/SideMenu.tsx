import { Stack } from '@mantine/core'
import React from 'react'
import ThemeToggler from './ThemeToggler';

const SideMenu = () => {
  return (
    <Stack h="100%" p="md" gap="md">
      <ThemeToggler />
    </Stack>
  )
}

export default SideMenu