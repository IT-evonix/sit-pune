import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const RobotautoImages: MediaItem[] = [
{
  id: 1,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/alumni-achievments/Startup-Success-Stroy.webp",
},

];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Alumni Achievements"
      images={RobotautoImages}
    />
  );
}