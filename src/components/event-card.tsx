import { Evento } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: Evento;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      className="flex flex-col flex-1 basis-80 h-[380px] max-w-[500px]"
      href={`/event/${event.slug}`}
    >
      <section className="w-full h-full bg-white/[3%] rounded-xl overflow-hidden relative hover:scale-105 active:scale-[1.02] transition-all">
        <Image
          src={event.imageUrl}
          alt="Event image"
          height={280}
          width={500}
          className="h-[60%] object-fit"
        />
        <div className="flex flex-col flex-1 items-center justify-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">{event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>

        <section className="absolute flex flex-col items-center justify-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-lime-300">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}
