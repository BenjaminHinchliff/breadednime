import Link from "next/link";
import Image from "next/image";
import breadImage from "~/assets/images/bread.png";

export function Logo() {
  return (
    <Link
      href="/"
      className="mb-2 text-center align-middle text-6xl font-bold text-indigo-500"
    >
      <Image
        className="mb-1 mr-1 inline-block h-9 w-9"
        src={breadImage}
        alt="Bread logo"
      />
      breadnime!
    </Link>
  );
}
