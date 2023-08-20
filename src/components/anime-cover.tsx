import Image from "next/image";
import { cn } from "~/lib/cn";

interface Props {
  className?: string;
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

export default function AnimeCover({ className, cover }: Props) {
  return (
    <div
      className={cn(
        "relative aspect-[177/250] overflow-hidden rounded-md",
        className
      )}
    >
      <Image
        className="object-cover"
        src={cover}
        fill={true}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${skeletonData}`}
        sizes="20vw"
        alt="Cover Image"
      />
    </div>
  );
}
