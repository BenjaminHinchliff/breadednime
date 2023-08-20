import { Logo } from "./logo";
import { SearchBar } from "./search-bar";

interface Props {
  initSearch?: string;
}

export function Navbar({ initSearch }: Props) {
  return (
    <div className="mt-2 flex flex-col justify-between md:flex-row">
      <Logo />
      <SearchBar initSearch={initSearch} />
    </div>
  );
}
