import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";

const RAImages: MediaItem[] = [
  {
    id: 1,
    type: "youtube",
    src: "https://www.youtube.com/watch?v=kmC-KG9TL3o",
    name: "",
  },
  {
    id: 2,
    type: "youtube",
    src: "https://www.youtube.com/watch?v=H-YoVcwItZc",
    name: "",
  },
];

export default function StudentTestimonials() {
  return (
    <div>
        <InfrastructureGallery
          title="Student Testimonials"
          images={RAImages}
        />
    </div>

    
  );
}