import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const ENTCImages: MediaItem[] = [
{
  id: 1,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-1.webp",
},
{
  id: 2,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-2.webp",
},
{
  id: 3,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-3.webp",
},
{
  id: 4,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-4.webp",
},
{
  id: 5,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-5.webp",
},
{
  id: 6,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-6.webp",
},
{
  id: 7,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-7.webp",
},
{
  id: 8,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-8.webp",
},
{
  id: 9,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-9.webp",
},
{
  id: 10,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-10.webp",
},
{
  id: 11,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-11.webp",
},
{
  id: 12,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-12.webp",
},
{
  id: 13,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-13.webp",
},
{
  id: 14,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-14.webp",
},
{
  id: 15,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-15.webp",
},
{
  id: 16,
  type: "image",
  src: "/images/innerpages/programe/entc/international-initiatives/international-initiatives-16.webp",
},
 
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="International Initiatives"
      images={ENTCImages}
    />
  );
}