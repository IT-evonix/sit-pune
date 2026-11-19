"use client";

import { useState } from "react";
import {
  Globe,
  Newspaper,
  ShoppingBag,
  Video,
  FileText,
  Bot,
  GraduationCap,
  Plus,
  X,
} from "lucide-react";

const links = [
  {
    title: "Visit SIU Website",
    url: "https://www.siu.edu.in/",
    icon: <Globe size={18} />,
  },
  {
    title: "Our Media Presence",
    url: "#",
    icon: <Newspaper size={18} />,
  },
  {
    title: "Symbiosis Merchandise",
    url: "https://merchandisebysymbiosis.com/",
    icon: <ShoppingBag size={18} />,
  },
  {
    title: "Campus Tour",
    url: "https://www.youtube.com/watch?si=-kkyrFqAYcDF-DA_&v=em3Q8NFeH6s&feature=youtu.be",
    icon: <Video size={18} />,
  },
  {
    title: "Mandatory Disclosure",
    url: "/pdf/Mandatory-Disclosure-2025-26.pdf",
    icon: <FileText size={18} />,
  },
  {
    title: "SAI 24x7 AI Assistant",
    url: "https://www.siu.edu.in/contact",
    icon: <Bot size={18} />,
  },
  {
    title: "SITEEE Exam Result",
    url: "https://set2026.ishinfosys.com/SYMENTSCORE-TC2026/login.aspx?_gl=1*1hk22p*_gcl_au*MTM5MTQ0Mjc2NS4xNzkzNjIwMTg1*_ga*Mzc2Mjg3MTg2LjE3OTIxMzAxNzM.*_ga_C0E00815H8*czE3OTUwOTQwMzUkbzEwMCRnMSR0MTc5NTA5NTE1MCRqMjYkbDAkaDg5NTg5MDY3MQ..*_ga_WRBP7SB61L*czE3OTUwOTQwMzUkbzEwMCRnMSR0MTc5NTA5NTE1MCRqMjYkbDAkaDE5MDkzOTcyNTM.",
    icon: <GraduationCap size={18} />,
  },
];

export default function StickyLinks() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop View */}
      <div className="sticky-links desktop-view">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sticky-link"
          >
            <span className="sticky-icon">{link.icon}</span>

            <span className="sticky-tooltip">
              {link.title}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile FAB Menu */}
      <div className={`fab-menu ${open ? "open" : ""}`}>
        <div className="fab-items">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="fab-item"
              style={{
                transitionDelay: `${index * 0.05}s`,
              }}
            >
              <span className="fab-icon">
                {link.icon}
              </span>

              <span className="fab-label">
                {link.title}
              </span>
            </a>
          ))}
        </div>

        <button
          className="fab-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Plus size={24} />}
        </button>
      </div>
    </>
  );
}