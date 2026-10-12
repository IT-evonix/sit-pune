import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";

const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "video",
    src: "/videos/CS/alumni-testimonial-cse-2024-28-batch1.mp4",  
    name: "",
  },
  {
    id: 2,
    type: "video",
    src: "/videos/CS/alumni-testimonial-cse-2024-28-batch2.mp4",
    name: "",
  },
  {
    id: 3,
    type: "video",
    src: "/videos/CS/alumni-testimonial-cse-2024-28-batch3.mp4",
    name: "",
  },
];

export default function StudentTestimonials() {
  return (
    <div>
        <InfrastructureGallery
          title="Student Testimonials"
          images={AIMLImages}
        />
    </div>

    
  );
}