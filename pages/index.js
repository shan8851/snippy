import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Snippet from "../components/Snippet";
import useSWR from "swr";
import LoadingSpinner from "../components/LoadingSpinner";
import languages from "../utils/Languages";

export default function Home() {
  const { data: snippets, mutate } = useSWR("/api/snippets");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    setSearchResults(snippets);
  }, [snippets]);

  useEffect(() => {
    if (snippets) {
      const results = snippets.filter((s) =>
        s.data.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  useEffect(() => {
    if (select == "") {
      setSearchResults(snippets);
    } else {
      const results = snippets.filter(
        (snippet) => snippet.data.language === select
      );
      setSearchResults(results);
    }
  }, [select]);

  if (!snippets) return <LoadingSpinner />;

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
            Never have to google that same solution again! All your snippets in
            one place.
          </p>
          <Link href="/new">
            <a className="mt-3 inline-block bg-green-300 hover:bg-green-900 text-green-900 hover:text-green-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create a Snippet!
            </a>
          </Link>

          <div className="bg-green-700 px-4 py-8 my-4 rounded-md">
            <div>
              <p className="font-bold text-s text-green-200 mb-4">
                FILTER BY LANGUAGE
              </p>
              <div className="flex justify-between w-full">
                <div>
                  {languages.map((language) => (
                    <label className="mr-4 font-bold text-green-200">
                      <input
                        type="radio"
                        name="radio"
                        value={language}
                        checked={select === language}
                        onChange={(event) => handleSelectChange(event)}
                        className="mr-2"
                      />
                      {language}
                    </label>
                  ))}
                </div>
                <button
                  className="bg-green-300 text-xs hover:bg-green-300 text-green-900 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mb-2 transform -translate-x-1 translate-y-1"
                  type="submit"
                  onClick={() => setSelect("")}
                >
                  RESET FILTERS
                </button>
              </div>
            </div>
            <p className="font-bold text-s text-green-200 mt-8">SEARCH:</p>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Enter search term..."
              className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        {searchResults &&
          searchResults.map((snippet) => (
            <Snippet
              key={snippet.id}
              snippet={snippet}
              snippetDeleted={mutate}
            />
          ))}
      </main>
    </div>
  );
}
