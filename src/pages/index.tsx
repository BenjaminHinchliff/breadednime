import { Bread } from "~/components/icon/bread";

import { SearchBar } from "~/components/search-bar";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 className="mb-2 text-center align-middle text-6xl font-bold text-indigo-500">
          <Bread color="black" className="mb-1 mr-1 inline-block h-9 w-9" />
          breadnime!
        </h1>
        <h2 className="text-center text-5xl">Ad-free anime, really!</h2>
        <SearchBar />
      </div>
    </>
  );
}
