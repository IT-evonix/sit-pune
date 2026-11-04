import LabsAndSpaces from "@/components/ui/LabsAndSpaces";
import { labsData } from "@/data/labsData";

export default function LabsAndSpacesPage() {
  const campusLifeDepartment = labsData.find(
    (department) => department.id === "campus-life-labsandspaces"
  );

  const campusLifeLab = campusLifeDepartment?.labs.find(
    (lab) => lab.id === "labsand-spaces"
  );

  return (
    <div className="main_content">
      {campusLifeDepartment && campusLifeLab && (
        <LabsAndSpaces
          departments={[
            {
              ...campusLifeDepartment,
              labs: [
                {
                  ...campusLifeLab,
                },
              ],
            },
          ]}
        />
      )}
    </div>
  );
}
