export interface EventType {
  id: number;
  title: string;
  slug?: string;
  image: string;
  description?: string;
  gallery?: string[];
}

export const events: EventType[] = [
  {
    id: 1,
    title: "Reverb 2025",
    image: "/images/events/cultural-events/Reverb2025-1.webp",
  },

  {
    id: 2,
    title: "Farewell Ceremony of Pass Out Batch of 2024 on 8th June 2024",
    slug: "science-exhibition",
    image: "/images/events/cultural-events/Reverb2025-2.webp",

    description: `With a multicultural environment at SIT with students from PAN India and the world, celebrations are the key to Unity in Diversity. Year long, many events take place at SIT, be it celebration of cultural festivals like Lohri, Navratri, Shiv-Jayanti, Shiv-Swarajya Din, so on and so forth.

    The extracurricular exposure starts from the induction program in the form of final cultural performance to the farewell given to the outgoing batch. In all the activities, students work in the form of a team with the Head of Cultural Activities - Prof. Shruti Maheshwari.

    The annual cultural festival is "Reverb" where multiple events ranging from music, dance, art, theatre, literature, food, gaming, and fashion are held. A unique theme is assigned each year by the students' cultural head and team and a vibrant stage is set up at SIT amphitheater. 

    SIT has Symbiosis Music Society which is the official music club of SIT and Soul to Sole which is the official dance troupe. Brushes to Pixels club looks after the arts and digital arts of artistic students and Mosaic is the official drama club of SIT. Photography is an inevitable part of capturing memories and this is done by the Photography club.

    `,

    gallery: [
      "/images/events/cultural-events/Reverb2025-2.webp",
      "/images/events/cultural-events/farewell-2024/Reverb2025-3.webp",
      "/images/events/cultural-events/farewell-2024/Reverb2025-4.webp",
      "/images/events/cultural-events/farewell-2024/Reverb2025-5.webp",
      "/images/events/cultural-events/farewell-2024/Reverb2025-6.webp",
      "/images/events/cultural-events/farewell-2024/Reverb2025-7.webp",
      "/images/events/cultural-events/farewell-2024/Reverb2025-8.webp",
      "/images/events/cultural-events/farewell-2024/Reverb2025-9.webp",
    ],
  },

  {
    id: 3,
    title: "Reverb 2024",
    image: "/images/events/cultural-events/Reverb2024-1.webp",
  },

   {
    id: 4,
    title: "Khande Navami Pooja",
    image: "/images/events/cultural-events/khande-navami-pooja.webp",
  },

  {
    id: 5,
    title: "Garba Celebration 2023",
    slug: "garba-celebration-2023",
    image: "/images/events/cultural-events/garba-celebration-2023.webp",
    gallery: [
      "/images/events/cultural-events/garba-celebration-2023.webp",
      "/images/events/cultural-events/garba-celebration-2023-2.webp",
      "/images/events/cultural-events/farewell-2024/Reverb2025-4.webp",
    ],
  },


];
