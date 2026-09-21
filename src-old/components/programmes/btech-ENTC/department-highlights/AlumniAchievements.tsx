import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const ENTCImages: MediaItem[] = [
{
  id: 1,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-1.webp",
},
{
  id: 2,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-2.webp",
},
{
  id: 3,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-3.webp",
},
{
  id: 4,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-4.webp",
},
{
  id: 5,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-5.webp",
},
{
  id: 6,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-6.webp",
},
{
  id: 7,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-7.webp",
},
{
  id: 8,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-8.webp",
},
{
  id: 9,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-9.webp",
},
{
  id: 10,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-10.webp",
},
{
  id: 11,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-11.webp",
},
{
  id: 12,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-12.webp",
},
{
  id: 13,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-13.webp",
},
{
  id: 14,
  type: "image",
  src: "/images/innerpages/programe/entc/alumni-achievments/alumni-achievements-14.webp",
},

 
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Alumni Achievements"
      images={ENTCImages}
    />
  );
}