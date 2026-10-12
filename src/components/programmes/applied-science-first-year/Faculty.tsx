import React from "react";
import FacultyCard from "@/components/ui/FacultyCard";
import { facultyasfy } from "@/data/FacultyNew";

const FacultyPage = () => {
  return (
    <main className="faculty-page">
      <section className="faculty-section">
        <div className="faculty-grid">
            {facultyasfy.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
      </section>
    </main>
  );
};

export default FacultyPage;
