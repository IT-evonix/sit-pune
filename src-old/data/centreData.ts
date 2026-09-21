export interface CentreItem {
  id: number;
  title: string;
  image: string;
  link?: string;
}

export const centreData: CentreItem[] = [
  {
    id: 1,
    title: "5G Use Case Lab",
    image: "/images/home/centre-of-excellence/centerimg-1.webp",
  },
  {
    id: 2,
    title: "Bajaj Engineering Skills Training Centre",
    image: "/images/home/centre-of-excellence/centerimg-2.webp",
  },
  {
    id: 3,
    title: "Semiconductor Design Excellence",
    image: "/images/home/centre-of-excellence/centerimg-3.webp",
  },
  {
    id: 4,
    title: "Bentley CoE for Infrastructure Innovation",
    image: "/images/home/centre-of-excellence/centerimg-4.webp",
  },
  {
    id: 5,
    title: "DeepCytes Advanced Research in Cybersecurity",
    image: "/images/home/centre-of-excellence/centerimg-5.webp",
  },
  {
    id: 6,
    title: "Intel CoE in Generative AI",
    image: "/images/home/centre-of-excellence/centerimg-6.webp",
  },
  {
    id: 7,
    title: "Infosys Makers Lab",
    image: "/images/home/centre-of-excellence/centerimg-7.webp",
    // link: "/centre-of-excellence/biotechnology",
  },
];
