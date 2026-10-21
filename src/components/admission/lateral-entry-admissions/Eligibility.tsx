import "@/app/css/admission.css";

const Eligibility = () => {
  return (
    <main className="main_content lateral-eligibility">
      <div className="lateral-eligibility__header">
        <h1 className="heading innerpageheading">Eligibility</h1>
        <p className="subheading">
          B.Tech. (Lateral Entry to Second Year)
        </p>
      </div>

      <ol className="lateral-eligibility__options">
        <li className="lateral-eligibility__option">
          <span className="lateral-eligibility__number" aria-hidden="true">
            01
          </span>
          <div className="lateral-eligibility__details">
            <div className="subheading18">Diploma in Engineering and Technology</div>
            <p>
              Passed a minimum three-year diploma examination, or a two-year
              diploma through lateral entry, in any branch of Engineering and
              Technology.
            </p>
            <p className="lateral-eligibility__marks">
              Minimum marks: <strong>45%</strong>
              <span>40% for candidates belonging to a reserved category</span>
            </p>
          </div>
        </li>

        <li className="lateral-eligibility__option">
          <span className="lateral-eligibility__number" aria-hidden="true">
            02
          </span>
          <div className="lateral-eligibility__details">
            <div className="subheading18">B.Sc. degree</div>
            <p>
              Passed a B.Sc. degree from a recognized university as defined by
              the UGC, and passed the 10+2 examination with Mathematics as a
              subject.
            </p>
            <p className="lateral-eligibility__marks">
              Minimum marks in B.Sc.: <strong>45%</strong>
              <span>40% for candidates belonging to a reserved category</span>
            </p>
          </div>
        </li>

        <li className="lateral-eligibility__option">
          <span className="lateral-eligibility__number" aria-hidden="true">
            03
          </span>
          <div className="lateral-eligibility__details">
            <div className="subheading18">B.Voc. or D.Voc. qualification</div>
            <p>
              Passed a B.Voc. or three-year D.Voc. programme in the same or an
              allied sector.
            </p>
          </div>
        </li>
      </ol>

      <aside className="lateral-eligibility__note">
        <p>
          The universities will offer suitable bridge courses, such as
          Mathematics, Physics, and Engineering Drawing, to help students from
          diverse backgrounds achieve the desired learning outcomes of the
          programme.
        </p>
      </aside>
    </main>
  );
};

export default Eligibility;
