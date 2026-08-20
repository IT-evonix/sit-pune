"use client";

import React from "react";
import Image from "next/image";

import { FacultyMember } from "@/data/FacultyNew";

interface FacultyCardProps {
  faculty: FacultyMember;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="faculty-card-wrapper">
      <div className="faculty-card-inner">
        {/* =====================================================
            FRONT SIDE
        ===================================================== */}
        <div className="faculty-card-face faculty-card-front">
          {/* Main Front Card */}
          <div className="faculty-front-body">
            {/* Faculty Photo */}
            <div className="faculty-photo-wrapper">
              <Image
                src={faculty.photo}
                alt={faculty.name}
                width={180}
                height={180}
                className="faculty-photo"
              />
            </div>
            {/* Front Content */}
            <div className="faculty-front-content">
              <h3 className="faculty-name">{faculty.name}</h3>

              <p className="faculty-designation">{faculty.designation}</p>
            </div>
            {/* Front Social Icons */}
            <FacultySocialLinks
              faculty={faculty}
              onLinkClick={handleLinkClick}
              position="front"
            />
          </div>
        </div>
        {/* =====================================================
            BACK SIDE
        ===================================================== */}
        <div className="faculty-card-face faculty-card-back">
          <div className="faculty-back-content">
            {/* <h3 className="faculty-back-name">{faculty.name}</h3>           
            <p className="faculty-back-designation">{faculty.designation}</p> */}
            {/* Qualification */}
            <div className="faculty-back-detail">
              <h4>Qualification</h4>
              <p>{faculty.qualification}</p>
            </div>
            {/* Email */}
            <div className="faculty-back-detail">
              <h4>Email</h4>

              <div className="faculty-email-list">
                {faculty.emails.map((email, index) => (
                  <a
                    key={`${email}-${index}`}
                    href={`mailto:${email}`}
                    className="faculty-email"
                    onClick={handleLinkClick}
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>
            {/* Back Social Icons */}
            <FacultySocialLinks
              faculty={faculty}
              onLinkClick={handleLinkClick}
              position="back"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   SOCIAL ICON COMPONENT
========================================================= */

interface FacultySocialLinksProps {
  faculty: FacultyMember;

  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;

  position: "front" | "back";
}

const FacultySocialLinks: React.FC<FacultySocialLinksProps> = ({
  faculty,
  onLinkClick,
  position,
}) => {
  return (
    <div className={`faculty-social-links faculty-social-links-${position}`}>
      {/* LinkedIn */}
      {faculty.links?.linkedin && (
        <a
          href={faculty.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="faculty-social-link"
          onClick={onLinkClick}
          aria-label={`${faculty.name} LinkedIn`}
        >
          <Image
            src="/images/innerpages/programe/aiml/faculty/linkdian.png"
            alt="LinkedIn"
            width={42}
            height={42}
          />
        </a>
      )}

      {/* Google Scholar */}
      {faculty.links?.googleScholar && (
        <a
          href={faculty.links.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="faculty-social-link"
          onClick={onLinkClick}
          aria-label={`${faculty.name} Google Scholar`}
        >
          <Image
            src="/images/innerpages/programe/aiml/faculty/google-scholar.png"
            alt="Google Scholar"
            width={42}
            height={42}
          />
        </a>
      )}

      {/* Scopus */}
      {faculty.links?.scopus && (
        <a
          href={faculty.links.scopus}
          target="_blank"
          rel="noopener noreferrer"
          className="faculty-social-link"
          onClick={onLinkClick}
          aria-label={`${faculty.name} Scopus`}
        >
          <Image
            src="/images/innerpages/programe/aiml/faculty/scopusid.png"
            alt="Scopus"
            width={42}
            height={42}
          />
        </a>
      )}

      {/* ORCID */}
      {faculty.links?.orcid && (
        <a
          href={faculty.links.orcid}
          target="_blank"
          rel="noopener noreferrer"
          className="faculty-social-link"
          onClick={onLinkClick}
          aria-label={`${faculty.name} ORCID`}
        >
          <Image
            src="/images/innerpages/programe/aiml/faculty/orchid.png"
            alt="ORCID"
            width={42}
            height={42}
          />
        </a>
      )}
    </div>
  );
};

export default FacultyCard;
