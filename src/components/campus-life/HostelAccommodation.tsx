import Image from "next/image";
import React from "react";

const HostelAccommodation = () => {
  return (
    <div className="main_content">
      <div className="hosteltopinner">
        <div className="row">
          <div className="col-md-6">
            <div className="heading innerpageheading">Hostel Facility of SIT Pune</div>
            <div className="subheading18">
              Safe, Comfortable and Student-Friendly Accommodation
            </div>
            <p>The Institute has seven hostels. There are three blocks of girls and four blocks for boys.</p>
            <p>The hostel rooms are spacious with natural light and ventilation. Each room has an attached toilet and bathroom.</p>
            <p className="m-0">Each student is provided with a steel cot, a study table and chair and a mattress.</p>
          </div>
          <div className="col-md-6">
            <Image
              src="/images/campus-life/hostel/girl-img.webp"
              alt="infrastructure"
              width={1400}
              height={522}
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <section className="hostel-section">
        <div className="hostel-image-box">
          <Image
            src="/images/campus-life/hostel/hostel-building1.webp"
            alt="Hostel Building"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 420px"
            className="hostel-main-image"
          />
          <div className="hostel-capacity">
            <h2>CAPACITY</h2>
            <h1>50</h1>
            <h2>STUDENTS</h2>
          </div>
        </div>
        <div className="hostel-security-content">
          <div className="subheading">
            Security: The following arrangements have been made to ensure the
            security of the inmates of the hostels:
          </div>

          <div className="hostel-security-grid">
            <div className="hostel-security-card">
              <Image
                src="/images/campus-life/hostel/building.png"
                alt="Building"
                width={55}
                height={85}
              />
              <p>Security check at the main gate of each Hostel</p>
            </div>

            <div className="hostel-security-card">
              <Image
                src="/images/campus-life/hostel/security-guard.webp"
                alt="Building"
                width={55}
                height={85}
              />
              <p>Lady guard at girls hostels, round the clock</p>
            </div>

            <div className="hostel-security-card hostel-security-wide">
              <Image
                src="/images/campus-life/hostel/cctv-camera.webp"
                alt="CCTV"
                width={55}
                height={85}
              />
              <p>
                Surveillance video camera at entrance of all hostel buildings.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hostel-section">
        <div className="hostel-security-content">
          <div className="subheading">Hostel Room Amenities</div>

          <div className="hostel-security-grid">
            <div className="hostel-security-card hostel-security-wide">
              <Image
                src="/images/campus-life/hostel/wifi.webp"
                alt="CCTV"
                width={55}
                height={85}
              />
              <div className="dic">
                <div className="subheading18">Wi-Fi Internet Facilities</div>
                <p>
                  All hostels have secure Wi-Fi internet connectivity, through
                  high end firewall.
                </p>
              </div>
            </div>
            <div className="hostel-security-card hostel-security-wide">
              <Image
                src="/images/campus-life/hostel/tv.png"
                alt="CCTV"
                width={55}
                height={85}
              />
              <div className="dic">
                <div className="subheading18">TV Lounge</div>
                <p>
                  Common TV lounge with cable connection on the ground floor of
                  each hostel building.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hostel-image-box">
          <Image
            src="/images/campus-life/hostel/hostel-building.webp"
            alt="Hostel Building"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 420px"
            className="hostel-main-image"
          />
          <div className="hostel-capacity">
            <h2>COMFORTABLE </h2>
            <h1>LIVING </h1>
            <h2>EXPERIENCE</h2>
          </div>
        </div>
      </section>
      <div className="achievementsGallery">
        <div className="achievementimgbox">
          <Image
            src="/images/campus-life/hostel/hostel-1.webp"
            alt="Sports images"
            width={600}
            height={1068}
            className="img-fluid"
            priority
          />
        </div>
        <div className="achievementimgbox">
          <Image
            src="/images/campus-life/hostel/hostel-2.webp"
            alt="Sports images"
            width={600}
            height={1068}
            className="img-fluid"
            priority
          />
        </div>
        <div className="achievementimgbox">
          <Image
            src="/images/campus-life/hostel/hostel-3.webp"
            alt="Sports images"
            width={600}
            height={1068}
            className="img-fluid"
            priority
          />
        </div>
        <div className="achievementimgbox">
          <Image
            src="/images/campus-life/hostel/hostel-4.webp"
            alt="Sports images"
            width={600}
            height={1068}
            className="img-fluid"
            priority
          />
        </div>
        <div className="achievementimgbox">
          <Image
            src="/images/campus-life/sports/achievements1.webp"
            alt="Sports images"
            width={600}
            height={1068}
            className="img-fluid"
            priority
          />
        </div>
        <div className="achievementimgbox">
          <Image
            src="/images/campus-life/sports/achievements1.webp"
            alt="Sports images"
            width={600}
            height={1068}
            className="img-fluid"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HostelAccommodation;
