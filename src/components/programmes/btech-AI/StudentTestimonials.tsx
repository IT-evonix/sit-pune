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
//   {
//     id: 3,
//     type: "video",
//     src: "/videos/video.mp4",
//     name: "",
//   },
  {
    id: 3,
    type: "youtube",
    src: "https://www.youtube.com/watch?v=AY9slOESdy8",
    name: "",
  },
  {
    id: 4,
    type: "youtube",
    src: "https://www.youtube.com/watch?v=9iJm1tis7Ak&source_ve_path=MTc4NDI0",
    name: "",
  },
  {
    id: 5,
    type: "youtube",
    src: "https://www.youtube.com/watch?v=DPIO8LYm-jk&source_ve_path=MTc4NDI0",
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