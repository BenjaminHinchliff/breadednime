import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
  initSearch: string;
}

export function SearchBar({ initSearch }: Props) {
  const [search, setSearch] = useState(initSearch);

  return (
    <div className="my-4 flex flex-row justify-center">
      <Input
        className="mr-2 max-w-md focus-visible:ring-primary"
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <Button className="font-extrabold">GO!</Button>
    </div>
  );
}
