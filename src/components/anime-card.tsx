import Link from "next/link";
import AnimeCover from "./anime-cover";

interface Props {
  href: string;
  title: string;
  cover: string;
}

export default function AnimeCard({ href, title, cover }: Props) {
  return (
    <Link href={href} className="m-1">
      <AnimeCover cover={cover} />
      <p className="text-center text-xl">{title}</p>
    </Link>
  );
}
