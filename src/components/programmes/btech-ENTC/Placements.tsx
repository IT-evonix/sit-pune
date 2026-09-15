import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const ENTCImages: MediaItem[] = [
{
  id: 1,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-1.webp",
},
{
  id: 2,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-2.webp",
},
{
  id: 3,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-3.webp",
},
{
  id: 4,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-4.webp",
},
{
  id: 5,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-5.webp",
},
{
  id: 6,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-6.webp",
},
{
  id: 7,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-7.webp",
},
{
  id: 8,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-8.webp",
},
{
  id: 9,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-9.webp",
},
{
  id: 10,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-10.webp",
},
{
  id: 11,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-11.webp",
},
{
  id: 12,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-12.webp",
},
{
  id: 13,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-13.webp",
},
{
  id: 14,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-14.webp",
},
{
  id: 15,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-15.webp",
},
{
  id: 16,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-16.webp",
},
{
  id: 17,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-17.webp",
},
{
  id: 18,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-18.webp",
},
{
  id: 19,
  type: "image",
  src: "/images/innerpages/programe/entc/placements/etc-placement-19.webp",
},
 
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Placements"
      images={ENTCImages}
    />
  );
}