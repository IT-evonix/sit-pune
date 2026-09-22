export interface UpcomingEvent {
  id: string;
  title: string;
  description?: string;
  date?: string;
  time?: string;
  venue?: string;
  image?: string;
}

export interface DepartmentUpcomingEvents {
  id: string;
  department: string;
  events: UpcomingEvent[];
}

export const upcomingEventsData: DepartmentUpcomingEvents[] = [
  {
    id: "aiml",
    department: "Artificial Intelligence & Machine Learning",
    events: [
      {
        id: "undercover-ai-detective-challenge",
        title: "The AI Club invites you to participate in UNDERCOVER",

        description:
          "The AI Detective Challenge, an interactive detective-style game where your team takes on the role of AI detectives.",

        date: "8th August 2026, Saturday",

        time: "10:00 AM - 2:00 PM",

        venue: "MSA-DPA Lab, 5th Floor",

        image:
          "/images/innerpages/programe/aiml/UpcomingEvents/UpcomingEvents1.webp",
      },

      // Add more AIML events here
      // {
      //   id: "another-event",
      //   title: "Another AI Event",
      //   description: "Event description...",
      //   date: "20th August 2026",
      //   time: "10:00 AM – 1:00 PM",
      //   venue: "Seminar Hall",
      //   image: "/images/innerpages/events/aiml/another-event.webp",
      // },
    ],
  },

  {
    id: "bca",
    department: "Bachelor of Computer Applications",
    events: [
      // Add BCA events here
      // {
      //   id: "bca-event-1",
      //   title: "BCA Technical Event",
      //   description: "Event description...",
      //   date: "15th August 2026",
      //   time: "11:00 AM – 2:00 PM",
      //   venue: "Computer Lab",
      //   image: "/images/innerpages/events/bca/bca-event.webp",
      // },
    ],
  },

  {
    id: "bba",
    department: "Bachelor of Business Administration",
    events: [
      // Add BBA events here
    ],
  },

  {
    id: "management",
    department: "Management",
    events: [
      // Add Management events here
    ],
  },

  {
    id: "information-technology",
    department: "Information Technology",
    events: [
      // Add IT events here
    ],
  },
];

export const DEFAULT_EVENT_IMAGE =
  "/images/innerpages/events/default-event.webp";