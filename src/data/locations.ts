export type TooltipDirection = "top" | "bottom" | "left" | "right";

export interface Location {
  id: number;
  title: string;
  university: string;
  city: string;
  country: string;
  programme: string;
  collaboration: string;
  established: string;
  top: string;
  left: string;
  direction: TooltipDirection;
}

export const locations: Location[] = [
  {
    id: 1,
    title: "SIT Pune",
    university: "Symbiosis Institute of Technology",
    city: "Lavale, Pune",
    country: "India",
    programme: "Home Campus",
    collaboration: "Academic & Research",
    established: "2008",
    top: "58%",
    left: "68%",
    direction: "top",
  },

  {
    id: 2,
    title: "University of Oxford",
    university: "Academic Partner",
    city: "Oxford",
    country: "United Kingdom",
    programme: "Student Exchange",
    collaboration: "Research",
    established: "2018",
    top: "25%",
    left: "54%",
    direction: "top",
  },

  {
    id: 3,
    title: "University of Waterloo",
    university: "Research Partner",
    city: "Ontario",
    country: "Canada",
    programme: "Exchange",
    collaboration: "Research",
    established: "2019",
    top: "34%",
    left: "15%",
    direction: "right",
  },

  {
    id: 4,
    title: "University of California",
    university: "Academic Partner",
    city: "California",
    country: "USA",
    programme: "Semester Exchange",
    collaboration: "Innovation",
    established: "2017",
    top: "39%",
    left: "18%",
    direction: "right",
  },

  {
    id: 5,
    title: "Technical University of Munich",
    university: "Research Partner",
    city: "Munich",
    country: "Germany",
    programme: "Research",
    collaboration: "Innovation",
    established: "2020",
    top: "39%",
    left: "52%",
    direction: "top",
  },

  {
    id: 6,
    title: "University of Tokyo",
    university: "Academic Partner",
    city: "Tokyo",
    country: "Japan",
    programme: "Exchange",
    collaboration: "Technology",
    established: "2018",
    top: "41%",
    left: "80%",
    direction: "left",
  },

  {
    id: 7,
    title: "National University of Singapore",
    university: "Academic Partner",
    city: "Singapore",
    country: "Singapore",
    programme: "Semester Abroad",
    collaboration: "Research",
    established: "2021",
    top: "50%",
    left: "75%",
    direction: "left",
  },

  {
    id: 8,
    title: "University of Sydney",
    university: "Research Partner",
    city: "Sydney",
    country: "Australia",
    programme: "Research Exchange",
    collaboration: "Innovation",
    established: "2019",
    top: "80%",
    left: "83%",
    direction: "left",
  },
];