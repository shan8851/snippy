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
        className="bg-blue-400 text-s hover:bg-blue-600 text-blue-900 hover:text-blue-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
        type="submit"
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? "Hide the Code" : "Show the Code 👇"}
      </button>
      {showCode && (
        <div className="relative">
          <pre className="text-blue-100 bg-blue-700 rounded-md p-2 my-6">
            {code}
          </pre>

          <button
            className="bg-blue-400 text-xs hover:bg-blue-300 text-blue-900 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mb-2 absolute top-0 right-0 transform -translate-x-1 translate-y-1"
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
