import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";

const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "youtube",
    src: "https://www.youtube.com/watch?v=8DUgokPKf94",
    name: "",
  },
  {
    id: 2,
    type: "youtube",
    src: "https://www.youtube.com/watch?v=N4TYOZFqjCU&source_ve_path=MTc4NDI0",
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