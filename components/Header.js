import Link from "next/link";

export default function Header() {
  return (
    <div className="p-4 bg-green-300">
      <Link href="/" className="font-bold text-2xl text-green-900">
        Welcome to Snippy
      </Link>
    </div>
  );
}
