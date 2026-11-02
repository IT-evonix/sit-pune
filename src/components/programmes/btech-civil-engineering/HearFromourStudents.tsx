import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";

const CEImages: MediaItem[] = [
  {
    id: 1,
    type: "youtube",
    src: "https://www.youtube.com/watch?v=EZpX_O0yGZE",
    name: "",
  },
  {
    id: 2,
    type: "youtube",
    src: "https://www.youtube.com/watch?v=VYe4S_hgYt8",
    name: "",
  },
];

export default function StudentTestimonials() {
  return (
    <div>
        <InfrastructureGallery
          title="Student Testimonials"
          images={CEImages}
        />
    </div>

    
  );
}