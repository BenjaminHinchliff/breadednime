import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  cover: string;
}

const skeleton = `
<svg width="1" height="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="1" height="1" fill="hsl(240 4.8% 95.9%)" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const skeletonData = toBase64(skeleton);

export default function AnimeCard({ title, cover }: Props) {
  return (
    <Link href="" className="m-1">
      <div className="relative aspect-[177/250] justify-center overflow-hidden rounded-md">
        <Image
          className="object-cover"
          src={cover}
          fill={true}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${skeletonData}`}
          sizes="20vw"
          alt={`${title} Cover Image`}
        />{" "}
      </div>
      <p className="text-center text-xl">{title}</p>
    </Link>
  );
}
