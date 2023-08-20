import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function SearchBar() {
  return (
    <div className="my-4 flex flex-row justify-center">
      <Input
        className="mr-2 max-w-md focus-visible:ring-primary"
        type="search"
        placeholder="Search"
      />
      <Button className="font-extrabold">GO!</Button>
    </div>
  );
}
