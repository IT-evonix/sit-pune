import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";

const MEImages: MediaItem[] = [
 {
    id: 1,
    type: "video",
    src: "/videos/mechanical-engineering/mechanical-engineering-2.mp4",  
    name: "",
  },
  {
    id: 2,
    type: "video",
    src: "/videos/mechanical-engineering/soham-gajare-testionial-video.mp4",
    name: "",
  },
];

export default function StudentTestimonials() {
  return (
    <div>
        <InfrastructureGallery
          title="Student Testimonials"
          images={MEImages}
        />
    </div>

    
  );
}