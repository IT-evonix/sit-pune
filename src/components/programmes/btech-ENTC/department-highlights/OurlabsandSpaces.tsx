import LabsAndSpaces from "@/components/ui/LabsAndSpaces";
import { labsData } from "@/data/labsData";

export default function LabsAndSpacesPage() {
  const entcDepartment = labsData.find(
    (department) => department.id === "ENTC"
  );

  const entcLab = entcDepartment?.labs.find((lab) => lab.id === "entc");

  return (
    <div className="main_content">
      {entcDepartment && entcLab && (
        <LabsAndSpaces
          departments={[
            {
              ...entcDepartment,
              labs: [entcLab],
            },
          ]}
        />
      )}
    </div>
  );
}