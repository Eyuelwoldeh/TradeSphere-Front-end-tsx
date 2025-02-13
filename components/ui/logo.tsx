import Link from "next/link";
import Image from "next/image";
import file from "@/public/images/file.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={file} alt="Cruip Logo" width={140} height={32} />
    </Link>
  );
}
