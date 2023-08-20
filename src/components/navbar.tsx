import { Logo } from "./logo";
import { SearchBar } from "./search-bar";

export function Navbar() {
  return (
    <div className="mt-2 flex flex-col justify-between md:flex-row">
      <Logo />
      <SearchBar />
    </div>
  );
}
