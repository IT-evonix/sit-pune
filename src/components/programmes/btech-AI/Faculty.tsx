// import FacultyMain from '@/components/FacultyMain'
// import React from 'react'

// const faculty = () => {
//   return (
//     <div>
//         <FacultyMain
//             category="undergraduate"
//             department="aiml"
//         />
//     </div>
//   )
// }

// export default faculty

import React from "react";
import FacultyCard from "@/components/ui/FacultyCard";
import { facultyData } from "@/data/FacultyNew";

const FacultyPage = () => {
  return (
    <main className="faculty-page">
      <section className="faculty-section">
        <div className="faculty-grid">
            {facultyData.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
      </section>
    </main>
  );
};

export default FacultyPage;
