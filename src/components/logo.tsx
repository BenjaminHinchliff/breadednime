import Link from "next/link";
import { Bread } from "./icon/bread";

export function Logo() {
  return (
    <Link
      href="/"
      className="mb-2 text-center align-middle text-6xl font-bold text-indigo-500"
    >
      <Bread color="black" className="mb-1 mr-1 inline-block h-9 w-9" />
      breadnime!
    </Link>
  );
}
