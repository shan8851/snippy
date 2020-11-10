import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import languages from "../utils/Languages";

export default function SnippetForm({ snippet }) {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      code: snippet ? snippet.data.code : "",
      language: snippet ? snippet.data.language : "",
      description: snippet ? snippet.data.description : "",
      name: snippet ? snippet.data.name : "",
    },
  });
  const router = useRouter();

  const createSnippet = async (data) => {
    const { code, language, description, name } = data;
    try {
      await fetch("/api/createSnippet", {
        method: "POST",
        body: JSON.stringify({ code, language, description, name }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const updateSnippet = async (data) => {
    const { code, language, description, name } = data;
    const id = snippet.id;
    try {
      await fetch("/api/updateSnippet", {
        method: "PUT",
        body: JSON.stringify({ code, language, description, name, id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(snippet ? updateSnippet : createSnippet)}>
      <div className="mb-4">
        <label
          className="block text-blue-300 text-sm font-bold mb-1"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="font-bold w-full bg-blue-600 px-3 py-2 outline-none text-gray-700"
          ref={register({ required: true })}
        />
        {errors.name && (
          <p className="font-bold text-blue-100 underline">Name is required</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-blue-300 text-sm font-bold mb-1"
          htmlFor="language"
        >
          Language
        </label>
        <select
          id="language"
          name="language"
          className="font-bold w-full bg-blue-600 px-3 py-2 outline-none text-blue-900"
          ref={register({ required: true })}
        >
          {languages.map((language, index) => (
            <option className="py-1" key={index}>
              {language}
            </option>
          ))}
        </select>
        {errors.language && (
          <p className="font-bold text-blue-100 underline">
            Language is required
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-blue-300 text-sm font-bold mb-1"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows="3"
          className="font-bold resize-none bg-blue-600 w-full px-3 py-2 placeholder-blue-200 text-blue-100 focus:outline-none"
          placeholder="What does the snippet do?"
          ref={register({ required: true })}
        ></textarea>
        {errors.description && (
          <p className="font-bold text-blue-100 underline">
            Description is required
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-blue-300 text-sm font-bold mb-1"
          htmlFor="code"
        >
          Code
        </label>
        <textarea
          name="code"
          id="code"
          rows="10"
          className="resize-none w-full px-3 py-2 bg-blue-600 placeholder-blue-200 text-blue-100 font-bold focus:outline-none"
          placeholder="ex. console.log('hello world')"
          ref={register({ required: true })}
        ></textarea>
        {errors.code && (
          <p className="font-bold text-blue-100 underline">Code is required</p>
        )}
      </div>
      <button
        className="bg-blue-300 hover:bg-blue-900 text-blue-900 hover:text-blue-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        type="submit"
      >
        Save
      </button>
      <Link href="/">
        <a className="mt-3 inline-block bg-blue-300 hover:bg-blue-700 text-blue-900 hover:text-blue-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Cancel
        </a>
      </Link>
    </form>
  );
}
