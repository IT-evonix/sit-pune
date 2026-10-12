import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/placements/01_Karin_Coelho_Amazon.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/placements/06_Mansi_Asati_Indian_Navy.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/placements/05_Samyak_Rai_Indian_Army.webp",
  },  
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/placements/04_Alefia_Asad_Godrej_Properties.webp",
  },  
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/placements/03_Ashish_Ranjan_dar.webp",
  },  
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/placements/02_Yashashwi_Rai_Futures_First.webp",
  },  
  
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Placements"
      images={AIMLImages}
    />
  );
}