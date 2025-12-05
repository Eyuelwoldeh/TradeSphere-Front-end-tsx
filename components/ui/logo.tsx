import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center shrink-0" aria-label="TradeSphere">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center mr-2">
          <span className="text-white font-bold text-lg">T</span>
        </div>
        <span className="text-xl font-bold text-gray-900">TradeSphere</span>
      </div>
    </Link>
  );
}
