import { Mail, MapPin, Phone } from "lucide-react";
import "@/app/css/library.css";

const ContactUs = () => (
  <div className="main_content libraryMainSec">
    <section className="library-section-heading">
      <div className="heading innerpageheading">Contact Us</div>
      <p>
        For membership, catalogue, or research-resource assistance, get in touch
        with the SIT Library.
      </p>
    </section>
    <div className="library-contact-card">
      <div className="library-contact-detail">
        <span className="library-card-icon">
          <MapPin size={30} aria-hidden="true" stroke-width="1.5"/>
        </span>
        <div>
          <div className="subheading18 mb-2">Library</div>
          <address>
            Symbiosis Institute of Technology
            <br />
            Symbiosis Knowledge Village
            <br />
            Gram: Lavale, Tal.: Mulshi
            <br />
            Dist.: Pune - 412115
          </address>
        </div>
      </div>
      <a
        className="library-contact-detail library-contact-link"
        href="tel:+912028116422" style={{ background: "#f5f8fc" }}
      >
        <span className="library-card-icon">
          <Phone size={30} aria-hidden="true" stroke-width="1.5"/>
        </span>
        <span>
          <span className="subheading18 d-block mb-2">Call the library</span>
          <span className="library-contact-value">020-28116422</span>
        </span>
      </a>
      <a
        className="library-contact-detail library-contact-link"
        href="mailto:librarian@sitpune.edu.in"
      >
        <span className="library-card-icon">
          <Mail size={30} aria-hidden="true" stroke-width="1.5"/>
        </span>
        <span>
          <span className="subheading18 d-block mb-2">Email the librarian</span>
          <span className="library-contact-value">
            librarian@sitpune.edu.in
          </span>
        </span>
      </a>
    </div>
  </div>
);

export default ContactUs;
