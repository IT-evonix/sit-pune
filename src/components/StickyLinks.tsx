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
    url: "#",
    icon: <Globe size={18} />,
  },
  {
    title: "Our Media Presence",
    url: "#",
    icon: <Newspaper size={18} />,
  },
  {
    title: "Symbiosis Merchandise",
    url: "#",
    icon: <ShoppingBag size={18} />,
  },
  {
    title: "Campus Tour",
    url: "#",
    icon: <Video size={18} />,
  },
  {
    title: "Mandatory Disclosure",
    url: "#",
    icon: <FileText size={18} />,
  },
  {
    title: "SAI 24x7 AI Assistant",
    url: "#",
    icon: <Bot size={18} />,
  },
  {
    title: "SITEEE Exam Result",
    url: "#",
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
        >
          {open ? <X size={24} /> : <Plus size={24} />}
        </button>
      </div>
    </>
  );
}