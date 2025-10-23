'use client';

import { IconPageBreak } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function ErrorPageState({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  console.log(error);

  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-6 p-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="rounded-full bg-red-50 p-4">
          <IconPageBreak size={48} className="text-gray-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-[var(--primary-color-text)]">
            Something went wrong
          </h2>
          <p className="text-gray-600 max-w-md">
            We encountered an unexpected error. Please try again or contact
            support if the problem persists.
          </p>
        </div>
      </div>

      <button
        type="button"
        disabled={isPending}
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {isPending ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <title>Loading</title>
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Retrying...
          </>
        ) : (
          'Try again'
        )}
      </button>
    </div>
  );
}
