import React, { useState } from "react";

export default function Code({ code }) {
  const [showCode, setShowCode] = useState(false);
  const [copyText, setCopyText] = useState("Copy");
  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopyText("✅ Copied!");
    setTimeout(() => {
      setCopyText("Copy");
    }, 1000);
  };
  return (
    <div>
      <button
        className="bg-green-300 text-s hover:bg-green-900 text-green-900 hover:text-green-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
        type="submit"
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? "Hide the Code" : "Show the Code 👇"}
      </button>
      {showCode && (
        <div className="relative">
          <pre className="text-green-100 bg-green-800 rounded-md p-2 my-6 flex-wrap">
            {code}
          </pre>

          <button
            className="bg-green-200 text-xs hover:bg-green-300 text-green-900 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mb-2 absolute top-0 right-0 transform -translate-x-1 translate-y-1"
            type="submit"
            onClick={copyCode}
          >
            {copyText}
          </button>
        </div>
      )}
    </div>
  );
}
