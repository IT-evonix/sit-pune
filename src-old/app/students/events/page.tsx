import Image from "next/image";
import Link from "next/link";
import { events } from "@/data/events";
import InnerpageBanner from "@/components/InnerpageBanner";


export default function EventsPage() {
  return (
    <div className="innerpages eventlisting">
      <InnerpageBanner
        title={`Events`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Students" },

          { label: "Events" },
        ]}
      />
        <div className="container py-5">
        <h1 className="heading innerpageheading text-center">Events</h1>

      <div className="row g-4">
        {events.map((event) => {
          const hasDetails =
            !!event.description ||
            (event.gallery && event.gallery.length > 1);

          return (
            <div
              key={event.id}
              className="col-lg-4 col-md-6"
            >
              <div className="eventlist_box">
                <div className="eventimg_box">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={500}
                    height={350}
                    className="card-img-top"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="subheading18">{event.title}</div>

                  {hasDetails && event.slug && (
                    <Link
                      href={`/students/events/${event.slug}`}
                      className="knowmoreevent">
                      View More
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}