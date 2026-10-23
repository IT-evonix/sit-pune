import { ArrowUpRight } from "lucide-react";
import "@/app/css/library.css";

const LibraryBook = () => (
  <div className="main_content libraryMainSec">
    <div className="row">
      <div className="col-md-7">
        <div className="facultyandstudent_box">
          <div className="library-section-heading">
          <div className="subheading">
            Students and faculty members can recommend the library resources
            through the following link:
          </div>
        </div>
        <div className="library-card-grid" style={{ marginTop: 24 }}>
          {[
            {
              group: "Faculty",
              href: "https://docs.google.com/forms/d/e/1FAIpQLSeaQjRsGMQZvfaJFcPHmuJpDQmHJWZ40v34cGfPuUCVvUOtWA/viewform",
            },
            {
              group: "Students",
              href: "https://docs.google.com/forms/d/1IS3Ob96m0Izo24miQ1myhvdJHjQE1bVCEXkxr5j5xXI/viewform?edit_requested=true",
            },
          ].map(({ group, href }) => (
            <a
              className="library-button-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              key={group}
              style={{
                alignItems: "center",
                justifyContent: "center",
                minHeight: 50,
                margin: 0,
                borderRadius: 52,
                background: group === "Faculty" ? "#c4161b" : "#163c7a",
                color: "#fff",
                fontSize: 18,
              }}
            >
              {group} <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          ))}
        </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="feedback_box" >
          <div className="library-section-heading">
            <div className="subheading">Feedback Form Only For SIT Users:</div>
          </div>
          <a 
            className="library-button-link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdbVSTHD8zrXVHMm7YAfrHYZ4vf2gqu64CM1RYErf9BNIorUg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              alignItems: "center",
              justifyContent: "center",
              minHeight: 50,
              width: "min(100%, 465px)",
              margin: "24px 0px 0px 0px",
              borderRadius: 52,
              background: "#444",
              color: "#fff",
              fontSize: 18,
            }}
          >
            Feedback <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default LibraryBook;
