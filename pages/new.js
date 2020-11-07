import Head from "next/head";
import SnippetForm from "../components/SnippetForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create New Snippet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-lg mx-auto">
        <h1 className="text-green-100 text-5xl font-bold mb-4">
          Create New Snippet
        </h1>
        <SnippetForm />
      </main>
    </div>
  );
}
