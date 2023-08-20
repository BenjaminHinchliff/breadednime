import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Search() {
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
