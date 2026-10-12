import InfrastructureGallery, { MediaItem } from "@/components/InfrastructureGallery";

const appliedScienceInternationalInitiatives: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/applied-science/international-initiatives/international-initiatives1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/applied-science/international-initiatives/international-initiatives2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/applied-science/international-initiatives/international-initiatives3.webp",
  },
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/applied-science/international-initiatives/international-initiatives4.webp",
  },
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/applied-science/international-initiatives/international-initiatives5.webp",
  },
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/applied-science/international-initiatives/international-initiatives6.webp",
  },
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/applied-science/international-initiatives/international-initiatives7.webp",
  },
  {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/applied-science/international-initiatives/international-initiatives8.webp",
  },
  {
    id: 9,
    type: "image",
    src: "/images/innerpages/programe/applied-science/international-initiatives/international-initiatives9.webp",
  },
  {
    id: 10,
    type: "image",
    src: "/images/innerpages/programe/applied-science/international-initiatives/international-initiatives10.webp",
  },
  {
    id: 11,
    type: "image",
    src: "/images/innerpages/programe/applied-science/international-initiatives/international-initiatives11.webp",
  },
];

export default function Page() {
  return (
    <InfrastructureGallery
      title="International Initiatives"
      images={appliedScienceInternationalInitiatives}
    />
  );
}
