'use client';

import ErrorState from '@/app/_components/error/ErrorState';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorState reset={reset} error={error} />;
}
