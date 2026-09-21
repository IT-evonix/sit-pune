import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";

const ENTCImages: MediaItem[] = [
  {
    id: 1,
    type: "video",
    src: "/videos/entc-video/Copy-of-alumni-testimonials-e&tc.mp4",  
    name: "",
  },
  {
    id: 2,
    type: "video",
    src: "/videos/entc-video/Copy-of-alumni-testimonials-e&tc-video.mp4",
    name: "",
  },
];

export default function StudentTestimonials() {
  return (
    <div>
        <InfrastructureGallery
          title="Student Testimonials"
          images={ENTCImages}
        />
    </div>

    
  );
}