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
    <form
      className="my-4 flex flex-row justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        searchNavigate();
      }}
    >
      <Input
        className="mr-2 max-w-md focus-visible:ring-primary"
        name="q"
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <Button className="font-extrabold" type="submit">
        GO!
      </Button>
    </form>
  );
}
