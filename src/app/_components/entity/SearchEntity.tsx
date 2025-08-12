"use client";
import { CloseButton, Loader, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useSearchParams } from "next/navigation";
import { useRef, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter } from "next/navigation";

type SearchEntityProps = {
  placeholder?: string;
};

export function SearchEntity({ placeholder }: SearchEntityProps) {
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLInputElement>(null);

  const pathname = usePathname();
  const { replace } = useRouter();

  // Inside the Search Component...
  const handleSearch = useDebouncedCallback((term) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      if (term) {
        params.set("search", term);
      } else {
        params.delete("search");
        if (ref?.current) {
          ref.current.value = "";
        }
      }
      replace(`${pathname}?${params.toString()}`);
    });
  }, 300);

  return (
    <TextInput
      ref={ref}
      placeholder={placeholder || "Search..."}
      leftSectionPointerEvents="none"
      leftSection={<IconSearch size={16} />}
      radius="sm"
      rightSection={
        isPending ? (
          <Loader color="gray" size={16} />
        ) : (
          <CloseButton
            aria-label="Clear input"
            onClick={() => handleSearch(null)}
            style={{
              display: searchParams.get("search")?.toString()
                ? undefined
                : "none",
            }}
          />
        )
      }
      rightSectionPointerEvents="all"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("search")?.toString()}
    />
  );
}
