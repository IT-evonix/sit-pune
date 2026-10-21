import React from "react";

const RulesRefundfees = () => {
  return (
    <div className="main_content">
      <div className="heading innerpageheading">
        Admission Cancellation and Refund of Fees:
      </div>
      <div className="siteee-step-card">
        <div className="subheading18 redheading">
          1. What is Procedure for First Year B.Tech. Admission Cancellation for
          2026?
        </div>
        <p>
          Login with your SETID and Password . Fill the required admission
          information and then apply for cancellation.
        </p>
        <div className="subheading18">
          For B. Tech Admission Cancellation following is the link
        </div>
        <a
          className="redlink"
          href="http://siufinance.ishinfo.com/UGStudentAdmission"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://siufinance.ishinfo.com/UGStudentAdmission
        </a>
      </div>

      <div className="siteee-step-card">
        <div className="subheading18 redheading">2.Refund Rules</div>
        <p>
          Please{" "}
          <a
            className="redlink"
            href="/pdf/admission/lateral-entry-admissions/refund-policy-pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>{" "}
          for more details.
        </p>
      </div>
    </div>
  );
};

export default RulesRefundfees;
