import { notFound } from "next/navigation";
import Image from "next/image";
import { events } from "@/data/events";

interface Props {
  params: {
    slug: string;
  };
}

export default function EventDetailsPage({ params }: Props) {
  // Check if events data exists
  if (!events || !Array.isArray(events)) {
    notFound();
  }

  const event = events.find((item) => item.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="innerpages">
      <div className="container py-5">
        <h1 className="heading innerpageheading mb-4">
          {event.title}
        </h1>

        {event.image && (
          <Image
            src={event.image}
            alt={event.title}
            width={1200}
            height={600}
            priority
            className="img-fluid eventimg_preview mb-4"
          />
        )}

        {event.description && (
          <div className="event-content mb-5">
            {event.description
              .split("\n\n")
              .filter((paragraph) => paragraph.trim() !== "")
              .map((paragraph, index) => (
                <p key={index} className="mb-3">
                  {paragraph}
                </p>
              ))}
          </div>
        )}

        {(event.gallery?.length ?? 0) > 0 && (
          <section className="eventsimages">
            <h2 className="heading innerpageheading mb-4">
              Event Gallery
            </h2>

            <div className="row g-4">
              {event.gallery!.map((image, index) => (
                <div
                  className="col-lg-4 col-md-6"
                  key={index}
                >
                  <Image
                    src={image}
                    alt={`${event.title} ${index + 1}`}
                    width={500}
                    height={350}
                    className="img-fluid rounded-4"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}