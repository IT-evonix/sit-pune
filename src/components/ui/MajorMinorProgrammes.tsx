"use client";

import {
  Atom,
  BarChart3,
  Brain,
  Cloud,
  Cpu,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import {
  majorMinorProgrammesData,
  type ProgrammeDepartment,
  type ProgrammeItem,
} from "@/data/majorMinorProgrammes";

type MajorMinorProgrammesProps = {
  departmentId?: string;
};

function ProgrammeIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "brain":
      return <Brain size={42} strokeWidth={1.7} />;

    case "cloud":
      return <Cloud size={42} strokeWidth={1.7} />;

    case "shield":
      return <ShieldCheck size={42} strokeWidth={1.7} />;

    case "chart":
      return <BarChart3 size={42} strokeWidth={1.7} />;

    case "atom":
      return <Atom size={42} strokeWidth={1.7} />;

    case "chip":
      return <Cpu size={42} strokeWidth={1.7} />;

    default:
      return <Brain size={42} strokeWidth={1.7} />;
  }
}

function ProgrammeItemRow({
  item,
  index,
}: {
  item: ProgrammeItem;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="major-minor-programme-item">
      {/* <div
        className={`major-minor-programme-number ${
          index % 2 === 0 ? "number-red" : "number-blue"
        }`}
      >
        {number}
      </div> */}

      <div
        className={`major-minor-programme-icon ${
          index % 2 === 0 ? "icon-red" : "icon-blue"
        }`}
      >
        <ProgrammeIcon icon={item.icon} />
      </div>

      <div className="major-minor-programme-divider" />

      <div className="major-minor-programme-title">{item.title}</div>
    </div>
  );
}

function ProgrammeCard({
  type,
  title,
  description,
  items,
}: {
  type: "major" | "minor";
  title: string;
  description?: string;
  items: ProgrammeItem[];
}) {
  const isMajor = type === "major";

  return (
    <div
      className={`major-minor-programme-card ${
        isMajor ? "major-card" : "minor-card"
      }`}
    >
      {/* Card Header */}
      <div
        className={`major-minor-card-header ${
          isMajor ? "major-header" : "minor-header"
        }`}
      >
        {/* <div className="major-minor-header-icon">
          {isMajor ? (
            <GraduationCap size={42} strokeWidth={1.7} />
          ) : (
            <Atom size={42} strokeWidth={1.7} />
          )}
        </div> */}

        {/* <div className="major-minor-header-divider" /> */}

        <h2>{title}</h2>
      </div>

      {/* Optional Description */}
      {description && (
        <div className="major-minor-card-description">{description}</div>
      )}

      {/* Programme Items */}
      <div className="major-minor-programme-list">
        {items.map((item, index) => (
          <ProgrammeItemRow key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function MajorMinorProgrammes({
  departmentId = "aiml",
}: MajorMinorProgrammesProps) {
  const department: ProgrammeDepartment | undefined =
    majorMinorProgrammesData.find((item) => item.id === departmentId);

  if (!department) {
    return null;
  }

  return (
    <section className="major-minor-programmes-section">
      {/* Main Heading */}
      <div className="major-minor-programmes-heading">
        {/* <h1>
          <span className="heading-blue">{department.shortTitle}</span>{" "}
          <span className="heading-red">Major & Minor</span>{" "}
          <span className="heading-blue">Programmes</span>
        </h1> */}

        {/* Optional Main Subtitle */}
        {/* {department.subtitle && <p>{department.subtitle}</p>} */}
      </div>

      {/* Major & Minor Cards */}
      <div className="major-minor-programmes-grid">
        <ProgrammeCard
          type="major"
          title={department.major.title}
          description={department.major.description}
          items={department.major.items}
        />

        <ProgrammeCard
          type="minor"
          title={department.minor.title}
          description={department.minor.description}
          items={department.minor.items}
        />
      </div>
    </section>
  );
}
