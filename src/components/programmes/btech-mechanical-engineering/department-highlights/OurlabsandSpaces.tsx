import LabsAndSpaces from "@/components/ui/LabsAndSpaces";
import { labsData } from "@/data/labsData";

export default function LabsAndSpacesPage() {
  const mechanicalDepartment = labsData.find(
    (department) => department.id === "mechanical-engineering"
  );

  const mechanicalLab = mechanicalDepartment?.labs.find(
    (lab) => lab.id === "mechanical-engineering"
  );

  return (
    <div className="main_content">
      {mechanicalDepartment && mechanicalLab && (
        <LabsAndSpaces
          departments={[
            {
              ...mechanicalDepartment,
              labs: [mechanicalLab],
            },
          ]}
        />
      )}
    </div>
  );
}