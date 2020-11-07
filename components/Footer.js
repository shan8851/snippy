import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center pt-8 pb-16">
      <p className="text-green-100 text-xl">
        Made with ❤️ by <Link href="https://asamshan.dev/">Asam Shan</Link>
      </p>
    </div>
  );
}
