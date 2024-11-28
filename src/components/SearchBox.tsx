"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchBox = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`search/${search}`);
  };
  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
};
