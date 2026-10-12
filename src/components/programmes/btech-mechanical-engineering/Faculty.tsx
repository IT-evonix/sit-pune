import React from "react";
import FacultyCard from "@/components/ui/FacultyCard";
import { facultyME } from "@/data/FacultyNew";

const FacultyPage = () => {
  return (
    <main className="faculty-page">
      <section className="faculty-section">
        <div className="faculty-grid">
            {facultyME.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
      </section>
    </main>
  );
};

export default FacultyPage;
