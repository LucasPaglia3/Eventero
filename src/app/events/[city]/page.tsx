import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Evento } from "@/lib/types";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: Evento[] = await response.json();

  return (
    <main className="flex flex-col items-center px-[20px] py-24 min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "Todos los eventos"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <EventsList events={events} />
    </main>
  );
}
