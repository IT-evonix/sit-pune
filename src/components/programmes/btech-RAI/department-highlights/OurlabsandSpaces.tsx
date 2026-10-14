import LabsAndSpaces from "@/components/ui/LabsAndSpaces";
import { labsData } from "@/data/labsData";

export default function LabsAndSpacesPage() {
  const roboticsDepartment = labsData.find(
    (department) => department.id === "RA-RAI"
  );

  const roboticsLab = roboticsDepartment?.labs.find(
    (lab) => lab.id === "robot-automation"
  );

  return (
    <div className="main_content">
      {roboticsDepartment && roboticsLab && (
        <LabsAndSpaces
          departments={[
            {
              ...roboticsDepartment,
              labs: [roboticsLab],
            },
          ]}
        />
      )}
    </div>
  );
}