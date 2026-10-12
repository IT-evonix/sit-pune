import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";

const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/placements/p1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/placements/p2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/placements/p3.webp",
  },
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/placements/p4.webp",
  },
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/placements/p5.webp",
  },
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/placements/p6.webp",
  },
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/placements/p7.webp",
  },
  {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/placements/p8.webp",
  },
  {
    id: 9,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/placements/p9.webp",
  },
  {
    id: 10,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/placements/p10.webp",
  },
  {
    id: 11,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/placements/p11.webp",
  },
];

export default function Page() {
  return <InfrastructureGallery title="Placements" images={AIMLImages} />;
}
