"use client";

import { Fragment, useMemo, useState } from "react";
import Image from "next/image";
import {
  Faculty,
  FacultyCategory,
  Department,
  facultyData,
} from "@/data/faculty";

interface FacultyMainProps {
  category: FacultyCategory;
  department: Department;
}

const FacultyMain = ({ category, department }: FacultyMainProps) => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const [arrowLeft, setArrowLeft] = useState(0);

  // Current Department Faculty
  const currentFaculty = facultyData[category]?.[department] ?? [];

  const handleClick = (
    faculty: Faculty,
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const card = event.currentTarget;
    const grid = card.closest(".faculty-grid");

    if (grid) {
      const gridRect = grid.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      setArrowLeft(cardRect.left - gridRect.left + cardRect.width / 2);
    }

    if (selectedFaculty?.id === faculty.id) {
      setSelectedFaculty(null);
    } else {
      setSelectedFaculty(faculty);
    }
  };

  // Desktop : 3 cards per row
  const groupedFaculty = useMemo(() => {
    const rows: Faculty[][] = [];

    for (let i = 0; i < currentFaculty.length; i += 3) {
      rows.push(currentFaculty.slice(i, i + 3));
    }

    return rows;
  }, [currentFaculty]);

  return (
    <section className="faculty-section">
      <div className="container">
        {groupedFaculty.map((row, rowIndex) => {
          const selectedInRow = row.find(
            (item) => item.id === selectedFaculty?.id,
          );

          return (
            <Fragment key={rowIndex}>
              <div className="faculty-grid">
                {row.map((faculty) => (
                  <div
                    key={faculty.id}
                    className={`faculty-item ${
                      selectedFaculty?.id === faculty.id ? "active" : ""
                    }`}
                  >
                    <div
                      className="faculty-card"
                      onClick={(e) => handleClick(faculty, e)}
                    >
                      <div className="faculty-image">
                        <Image
                          src={faculty.image}
                          alt={faculty.name}
                          fill
                          sizes="100vw"
                        />
                      </div>

                      <div className="faculty-content">
                        <div className="subheading">{faculty.name}</div>

                        <span>{faculty.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedInRow && (
                <div className="faculty-details">
                  <div
                    className="details-arrow"
                    style={{
                      left: `${arrowLeft}px`,
                    }}
                  />

                  <button
                    className="faculty-close"
                    onClick={() => setSelectedFaculty(null)}
                    aria-label="Close Faculty Details"
                  >
                    ✕
                  </button>

                  <div className="details-grid">
                    <div className="facultyleft">
                      <Image
                        src={selectedInRow.image}
                        alt={selectedInRow.name}
                        width={280}
                        height={350}
                      />
                    </div>

                    <div className="facultyright">
                      <div className="heading">{selectedInRow.name}</div>

                      <div className="subheading18">
                        {selectedInRow.designation}
                      </div>

                      <div className="info_box_main">
                        <div className="info-box">
                          <div className="subheading">Qualification</div>

                          <p>{selectedInRow.qualification}</p>
                        </div>

                        <div className="info-box">
                          <div className="subheading">Email</div>

                          {selectedInRow.email.map((email, index) => (
                            <p key={index}>
                              <a
                                href={`mailto:${email}`}
                                className="email-link"
                              >
                                {email}
                              </a>
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="facultyprofile_box">
                        <div className="subheading">Professional Profiles</div>

                        <div className="facultyprofile_links">
                          {selectedInRow.linkedin && (
                            <a
                              href={selectedInRow.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              LinkedIn
                            </a>
                          )}

                          {selectedInRow.googleScholar && (
                            <a
                              href={selectedInRow.googleScholar}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Google Scholar
                            </a>
                          )}

                          {selectedInRow.scopus && (
                            <a
                              href={selectedInRow.scopus}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Scopus
                            </a>
                          )}

                          {selectedInRow.orcid && (
                            <a
                              href={selectedInRow.orcid}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              ORCID
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default FacultyMain;
