
import React from "react";
import FacultyCard from "@/components/ui/FacultyCard";
import { facultyCS } from "@/data/FacultyNew";

const FacultyPage = () => {
  return (
    <main className="faculty-page">
      <section className="faculty-section">
        <div className="faculty-grid">
            {facultyCS.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
      </section>
    </main>
  );
};

export default FacultyPage;
