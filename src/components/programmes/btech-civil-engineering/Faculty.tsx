
import React from "react";
import FacultyCard from "@/components/ui/FacultyCard";
import { facultyData } from "@/data/FacultyNew";

const FacultyPage = () => {
  return (
    <main className="faculty-page">
      <section className="faculty-section d-none">
        <div className="faculty-grid">
            {facultyData.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
      </section>
      <p>Coming Soon</p>
    </main>
  );
};

export default FacultyPage;
