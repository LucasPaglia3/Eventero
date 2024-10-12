"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;

    router.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full p-3 bg-slate-900 rounded-lg outline-none ring-[#a4f839]/50 transition-all focus:ring-1 focus:bg-white/10"
        type="text"
        placeholder="Busca eventos en cualquier ciudad..."
        spellCheck={false}
      />
    </form>
  );
}
