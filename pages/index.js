import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Snippy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="my-12">
          <h1 className="font-bold text-green-100 text-5xl mb-4">Snippy</h1>
          <p className="text-green-200 text-xl mb-4">
            Never have to google that same solution again!
          </p>
          <Link href="/new">
            <a className="mt-3 inline-block bg-green-300 hover:bg-green-900 text-green-900 hover:text-green-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create a Snippet!
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
