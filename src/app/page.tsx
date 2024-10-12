import H1 from "@/components/h1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <H1>Encontra eventos cerca tuyo</H1>
      <p className="mb-12 mt-7 text-2xl lg:3xl opacity-75">
        Busca entre mas de
        <span className="font-bold italic underline text-lime-300">
          10,000 eventos
        </span>{" "}
        en tu area
      </p>
      <SearchForm />
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link
            className="hover:text-white/60 hover:font-bold transition-colors"
            href="/events/austin"
          >
            Austin
          </Link>
          <Link
            className="hover:text-white/60 hover:font-bold transition-colors"
            href="/events/seattle"
          >
            Seattle
          </Link>
        </div>
      </section>
    </main>
  );
}
