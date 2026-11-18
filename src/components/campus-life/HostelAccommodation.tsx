import React from "react";
import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";
import {
  Cctv,
  LockKeyhole,
  MonitorPlay,
  Shield,
  ShieldCheck,
  UserRound,
  Wifi,
} from "lucide-react";
import Image from "next/image";

const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/campus-life/hostel/hostel-1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/campus-life/hostel/hostel-2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/campus-life/hostel/hostel-3.webp",
  },
  {
    id: 4,
    type: "image",
    src: "/images/campus-life/hostel/hostel-4.webp",
  },
];

const HostelAccommodation = () => {
  return (
    <div className="hostelAccommodation main_content">
      <div className="hostelAccommodationInner">
        <div className="hostelAccommodationcontent">
          <div className="heading innerpageheading">Hostel/ Accommodation</div>
          <div className="hostel-intro">
            <p>
              The Institute has seven hostels. There are three blocks of girls
              and four blocks for boys.
            </p>
            <p>
              The hostel rooms are spacious with natural light and ventilation.
              Each room has an attached toilet and bathroom.
            </p>
            <p className="m-0">
              Each student is provided with a steel cot, a study table and chair
              and a mattress.
            </p>
          </div>
          <div className="hostel-security" aria-labelledby="hostel-security-title">
            <div className="hostel-security-banner">
              <div className="hostel-security-emblem" aria-hidden="true">
                <Shield className="hostel-security-shield" />
                <LockKeyhole className="hostel-security-lock" />
              </div>
              <div className="hostel-security-copy">
                <div className="subheading18">Security:</div>
                <p>
                  The following arrangements have been made to ensure the
                  security of the inmates of the hostels:
                </p>
              </div>
            </div>

            <div className="hostel-security-features">
              <div className="hostel-security-feature">
                <span
                  className="hostel-security-feature-icon"
                  aria-hidden="true"
                >
                  <ShieldCheck />
                </span>
                <p>Security check at the main gate of each Hostel.</p>
              </div>
              <div className="hostel-security-feature">
                <span
                  className="hostel-security-feature-icon"
                  aria-hidden="true"
                >
                  <UserRound />
                </span>
                <p>Lady guard at girls hostels, round the clock.</p>
              </div>
              <div className="hostel-security-feature">
                <span
                  className="hostel-security-feature-icon"
                  aria-hidden="true"
                >
                  <Cctv />
                </span>
                <p>
                  Surveillance video camera at entrance of all hostel buildings.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hostelAccommodationimages">
          <Image
            src="/images/campus-life/hostel/hostel-img.webp"
            alt="Dr. S.B. Mujumdar"
            width={1200}
            height={800}
            className="img-fluid leader-image"
            priority
          />
        </div>
      </div>

      <div className="hostel-amenities">
            <div className="hostel-amenity">
              <span className="hostel-amenity-icon" aria-hidden="true">
                <Wifi />
              </span>
              <div className="hostel-amenity-copy">
                <div className="subheading18">Wi-Fi Internet Facilities</div>
                <p>
                  All hostels have secure Wi-Fi internet connectivity, through
                  high end firewall.
                </p>
              </div>
            </div>
            <div className="hostel-amenity">
              <span className="hostel-amenity-icon" aria-hidden="true">
                <MonitorPlay />
              </span>
              <div className="hostel-amenity-copy">
                <div className="subheading18">TV Lounge</div>
                <p>
                  Common TV lounge with cable connection on the ground floor of
                  each hostel building.
                </p>
              </div>
            </div>
          </div>

      <div className="row mt-4 mt-sm-5">
        <div className="col-md-12">
          <InfrastructureGallery
            title="Hostel Facility of SIT Pune"
            images={AIMLImages}
          />
        </div>
      </div>
    </div>
  );
};

export default HostelAccommodation;
