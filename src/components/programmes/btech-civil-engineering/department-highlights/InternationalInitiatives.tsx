import InfrastructureGallery, { MediaItem } from "@/components/InfrastructureGallery";

const internationalInitiativesImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/international-initiatives/post1_lamp_lighting.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/international-initiatives/post1_loughborough_team.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/international-initiatives/post2_3d_concrete_printing_lab.webp",
  },
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/international-initiatives/post2_announcement_poster.webp",
  },
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/international-initiatives/post3_digital_engineering_labs.webp",
  },
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/international-initiatives/post3_event_collage.webp",
  },
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/international-initiatives/post4_group_photo.webp",
  },
  {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/international-initiatives/post4_mij_building.webp",
  },
  {
    id: 9,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/international-initiatives/post5_mij_interaction.webp",
  },
];

export default function Page() {
  return (
    <InfrastructureGallery
      title="International Initiatives"
      images={internationalInitiativesImages}
    />
  );
}