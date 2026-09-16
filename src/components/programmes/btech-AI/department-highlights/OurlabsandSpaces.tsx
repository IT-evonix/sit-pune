// import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


// const AIMLImages: MediaItem[] = [
//   {
//     id: 1,
//     type: "image",
//     src: "/images/innerpages/programe/aiml/our-labs-and-spaces/Apple-Authorised-Training-Centre.webp",
//   },
//   {
//     id: 2,
//     type: "image",
//     src: "/images/innerpages/programe/aiml/our-labs-and-spaces/Data-Visualisation-Lab.webp",
//   },
//   {
//     id: 3,
//     type: "image",
//     src: "/images/innerpages/programe/aiml/our-labs-and-spaces/Intel-Unnati-Generative-AI-lab.webp",
//   },   
//   {
//     id: 4,
//     type: "image",
//     src: "/images/innerpages/programe/aiml/our-labs-and-spaces/our-labs-and-spaces1.webp",
//   },   
//   {
//     id: 5,
//     type: "image",
//     src: "/images/innerpages/programe/aiml/our-labs-and-spaces/our-labs-and-spaces2.webp",
//   },   
// ];


import LabsAndSpaces from "@/components/ui/LabsAndSpaces";
import { labsData } from "@/data/labsData";

export default function LabsAndSpacesPage() {
  const aimlDepartment = labsData.find(
    (department) => department.id === "aiml"
  );

  const machineLearningLab =
    aimlDepartment?.labs.find(
      (lab) => lab.id === "machine-deep-learning"
    );

  return (
    <main>
      {aimlDepartment && machineLearningLab && (
        <LabsAndSpaces
          departments={[
            {
              ...aimlDepartment,
              labs: [machineLearningLab],
            },
          ]}
        />
      )}
    </main>
  );
}