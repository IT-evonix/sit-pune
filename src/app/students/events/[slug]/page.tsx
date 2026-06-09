import { notFound } from "next/navigation";
import Image from "next/image";
import { events } from "@/data/events";

interface Props {
  params: {
    slug: string;
  };
}

export default function EventDetailsPage({ params }: Props) {
  const event = events.find((item) => item.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="innerpages">
      <div className="container py-5">
        <div className="heading innerpageheading">{event.title}</div>

        <Image
          src={event.image}
          alt={event.title}
          width={1200}
          height={600}
          className="img-fluid eventimg_preview mb-4"
        />

        {event.description && (
          <div className="mb-0">
            {event.description.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-3">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {event.gallery && event.gallery.length > 0 && (
          <>
            <div className="eventsimages">
              <div className="heading innerpageheading">Event Gallery</div>

              <div className="row g-4">
                {event.gallery.map((image, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
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
            </div>
          </>
        )}
      </div>
    </div>
  );
}
