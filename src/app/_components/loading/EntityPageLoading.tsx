import { Box, LoadingOverlay } from '@mantine/core';
import { cn } from '@/utils/shared/cn';

export function EntityPageLoading({ className }: { className?: string }) {
  return (
    <Box
      pos="relative"
      className={cn(
        'flex h-full max-h-screen min-h-[100px] w-full items-center justify-center rounded-lg border dark:bg-gray-900',
        className,
      )}
    >
      <LoadingOverlay
        visible
        overlayProps={{
          radius: 'lg',
          blur: 2,
          backgroundOpacity: 0.75,
          color: 'var(--loading-overlay-bg)',
        }}
        loaderProps={{
          color: 'var(--primary-color-default)',
        }}
      />
    </Box>
  );
}
