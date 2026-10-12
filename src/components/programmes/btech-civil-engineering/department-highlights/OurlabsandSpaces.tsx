
import LabsAndSpaces from "@/components/ui/LabsAndSpaces";
import { labsData } from "@/data/labsData";

export default function LabsAndSpacesPage() {
  const civilDepartment = labsData.find(
    (department) => department.id === "civil-engineering"
  );

  const civilLab = civilDepartment?.labs.find(
    (lab) => lab.id === "civil-engineering"
  );

  return (
    <div className="main_content">
      {civilDepartment && civilLab && (
        <LabsAndSpaces
          departments={[
            {
              ...civilDepartment,
              labs: [civilLab],
            },
          ]}
        />
      )}
    </div>
  );
}