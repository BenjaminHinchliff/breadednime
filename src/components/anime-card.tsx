import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  cover: string;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function AnimeCard({ title, cover }: Props) {
  return (
    <Link href="" className="m-1">
      <div className="relative aspect-[177/250] justify-center overflow-hidden rounded-md">
        <Image
          className="object-cover"
          src={cover}
          fill={true}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          alt="Violet Evergarden Cover Image"
        />{" "}
      </div>
      <p className="text-center text-xl">{title}</p>
    </Link>
  );
}
