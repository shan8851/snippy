import Link from "next/link";

export default function Header() {
  return (
    <div className="p-4 bg-blue-700">
      <Link href="/">
        <a className="font-bold text-2xl text-blue-200">Welcome to Snippy</a>
      </Link>
    </div>
  );
}
