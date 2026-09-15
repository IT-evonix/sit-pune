import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const ENTCImages: MediaItem[] = [
 {
  id: 1,
  type: "image",
  src: "/images/innerpages/programe/entc/faculty-achievements/faculty-achievements-1.webp",
},
{
  id: 2,
  type: "image",
  src: "/images/innerpages/programe/entc/faculty-achievements/faculty-achievements-2.webp",
},
{
  id: 3,
  type: "image",
  src: "/images/innerpages/programe/entc/faculty-achievements/faculty-achievements-3.webp",
},
{
  id: 4,
  type: "image",
  src: "/images/innerpages/programe/entc/faculty-achievements/faculty-achievements-4.webp",
},
{
  id: 5,
  type: "image",
  src: "/images/innerpages/programe/entc/faculty-achievements/faculty-achievements-5.webp",
},
{
  id: 6,
  type: "image",
  src: "/images/innerpages/programe/entc/faculty-achievements/faculty-achievements-6.webp",
},
{
  id: 7,
  type: "image",
  src: "/images/innerpages/programe/entc/faculty-achievements/faculty-achievements-7.webp",
},
{
  id: 8,
  type: "image",
  src: "/images/innerpages/programe/entc/faculty-achievements/faculty-achievements-8.webp",
},
{
  id: 9,
  type: "image",
  src: "/images/innerpages/programe/entc/faculty-achievements/faculty-achievements-9.webp",
},
{
  id: 10,
  type: "image",
  src: "/images/innerpages/programe/entc/faculty-achievements/faculty-achievements-10.webp",
},
{
  id: 11,
  type: "image",
  src: "/images/innerpages/programe/entc/faculty-achievements/faculty-achievements-11.webp",
},
{
  id: 12,
  type: "image",
  src: "/images/innerpages/programe/entc/faculty-achievements/faculty-achievements-12.webp",
},
 
  
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Faculty Achievements"
      images={ENTCImages}
    />
  );
}