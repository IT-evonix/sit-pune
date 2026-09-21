"use client";

import { studentProjectsData } from "@/data/studentProjectList";

// import "@/css/StudentProjectList.css";

interface StudentProjectListProps {
  department: string;
}

export default function StudentProjectList({
  department,
}: StudentProjectListProps) {
  const departmentData = studentProjectsData.find(
    (item) => item.department === department,
  );

  if (!departmentData) {
    return null;
  }

  return (
    <section className="student_project_list_section">
      {departmentData.years.map((yearData) => (
        <div className="student_project_year_block" key={yearData.year}>
          {/* Year Heading */}
          <div className="subheading">
            {departmentData.department} {yearData.year} Projects:
          </div>

          {/* Project Table */}
          <div className="table-responsive shadow-sm">
            <table className="student_project_table">
              <thead>
                <tr>
                  <th className="student_project_sr">SR. NO.</th>
                  <th>Title</th>
                </tr>
              </thead>

              <tbody>
                {yearData.projects.map((project, index) => (
                  <tr key={project.id}>
                    <td className="student_project_sr">{index + 1}</td>

                    <td>{project.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </section>
  );
}
