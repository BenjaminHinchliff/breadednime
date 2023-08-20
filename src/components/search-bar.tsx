import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/router";

interface Props {
  initSearch?: string;
}

export function SearchBar({ initSearch }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState(initSearch);

  const searchNavigate = () => {
    const searchParams = new URLSearchParams({ q: search ?? "" });
    router.push(`/search?${searchParams}`);
  };

  return (
    <div className="my-4 flex flex-row justify-center">
      <Input
        className="mr-2 max-w-md focus-visible:ring-primary"
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchNavigate();
          }
        }}
      />
      <Button className="font-extrabold" onClick={searchNavigate}>
        GO!
      </Button>
    </div>
  );
}
