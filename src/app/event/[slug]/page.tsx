import H1 from "@/components/h1";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = params;

  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event = await res.json();

  return (
    <main>
      <section className="relative h-[361px] overflow-hidden">
        <Image
          className="object-cover z-0 blur-3xl"
          src={event.imageUrl}
          alt="Event background Image"
          fill
          quality={50}
          sizes="(max-width: 1280) 100vw, 1280px"
          priority
        />
        <div className="z-1 relative">
          <Image
            src={event.imageUrl}
            alt="Event Image"
            width={320}
            height={201}
          />

          <div>
            <H1 className="">{event.name}</H1>
            <p>Organized by: {event.organizerName}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
