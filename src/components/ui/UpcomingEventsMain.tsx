"use client";

import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import {
  upcomingEventsData,
  DEFAULT_EVENT_IMAGE,
  type UpcomingEvent,
} from "@/data/UpcomingEvents";

interface UpcomingEventsProps {
  department?: string;
  title?: string;
  showDepartmentTitle?: boolean;
}

const UpcomingEvents = ({
  department,
  title = "Upcoming Events",
  showDepartmentTitle = false,
}: UpcomingEventsProps) => {
  const departmentData = upcomingEventsData.find(
    (item) => item.id.toLowerCase() === department?.toLowerCase(),
  );

  const events: UpcomingEvent[] = departmentData?.events ?? [];

  if (!departmentData || events.length === 0) {
    return null;
  }

  return (
    <section className="upcoming-events-section">
      <div className="upcoming-events-heading">
        <div className="heading innerpageheading">{title}</div>

        {showDepartmentTitle && (
          <p className="upcoming-events-department">
            {departmentData.department}
          </p>
        )}
      </div>

      <div className="upcoming-events-list">
        {events.map((event) => {
          const eventImage = event.image?.trim() || DEFAULT_EVENT_IMAGE;

          return (
            <article className="upcoming-event-card" key={event.id}>
              <div className="upcoming-event-image">
                <Image
                  src={eventImage}
                  alt={event.title || "Upcoming Event"}
                  width={700}
                  height={450}
                />
              </div>

              <div className="upcoming-event-content">
                {event.date && (
                  <div className="upcoming-event-detail">
                    <div className="datetext">{event.date}</div>
                  </div>
                )}
                {event.title && (
                  <h3 className="upcoming-event-title subheading">
                    {event.title}
                  </h3>
                )}

                {event.description && (
                  <p className="upcoming-event-description">
                    {event.description}
                  </p>
                )}

                <div className="upcoming-event-details">
                  {event.time && (
                    <div className="upcoming-event-detail">
                      <span className="upcoming-event-label">
                        <Clock size={20} />
                      </span>
                      <span>{event.time}</span>
                    </div>
                  )}
                  |
                  {event.venue && (
                    <div className="upcoming-event-detail">
                      <span className="upcoming-event-label">
                        <MapPin size={20} />
                      </span>
                      <span>{event.venue}</span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default UpcomingEvents;
