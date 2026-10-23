import { ArrowUpRight, BookOpen, GraduationCap } from "lucide-react";
import "@/app/css/library.css";

const membershipTypes = [
  {
    title: "Staff",
    allowance: "Up to 8 books",
    period: "One semester",
    detail: "Teaching and Nonteaching Staff can get 8 books issued at a time for one semester.",
    href: "https://docs.google.com/forms/d/1mGepmXyaFMxm7rL43Pl0zto685y3ZQqASxkd_q0VARI/edit",
    action: "Staff Membership Form",
    icon: BookOpen,
  },
  {
    title: "Students",
    allowance: "Up to 6 books",
    period: "30 days",
    detail: "Students can get 6 books issued at a time for 30 days. Furthermore, a one-time re-issue facility is also available.",
    href: "https://docs.google.com/forms/d/1MHiXXS9_QfaBDPCzLCD_tOcsirUK-05wb1rz422w-I4/edit",
    action: "Student Membership Form",
    icon: GraduationCap,
  },
];

const LibraryMembership = () => (
  <div className="main_content libraryMainSec">
    <section className="library-section-heading">
      <div className="heading innerpageheading">Library Membership</div>
      <p>Library membership gives SIT students and staff access to borrowing and on-campus library services.</p>
    </section>
    <div className="library-card-grid">
      {membershipTypes.map(({ icon: Icon, ...membership }) => (
        <article className="library-info-card" key={membership.title}>
          <span className="library-card-icon"><Icon size={30} aria-hidden="true" stroke-width="1.5"/></span>
          <div className="subheading18">{membership.title}</div>
          <div className="library-membership-facts">
            <span><strong>{membership.allowance}</strong> at a time</span>
            <span><strong>{membership.period}</strong> loan period</span>
          </div>
          <p>{membership.detail}</p>
          <a className="library-action-link" href={membership.href} target="_blank" rel="noopener noreferrer">
            {membership.action}<ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </article>
      ))}
    </div>
  </div>
);

export default LibraryMembership;
