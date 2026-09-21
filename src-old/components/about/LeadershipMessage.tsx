import Image from "next/image";
import InnerpageBanner from "@/components/InnerpageBanner";

interface LeadershipMessageProps {
  image: string;
  name: string;
  designation: string;
  message: string[];
}

export default function LeadershipMessage({
  image,
  name,
  designation,
  message,
}: LeadershipMessageProps) {
  return (
    <div className="div">
      <InnerpageBanner
        title={`Chancellor`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "About" },

          { label: "Chancellor" },
        ]}
      />
      <div className="leadership_inner">
        <div className="container">
          <div className="row g-5">
            {/* Left Image */}
            <div className="col-lg-4 text-center">
              <div className="leader-sticky">
                <div className="leader-image-wrapper">
                  <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={650}
                    className="img-fluid leader-image"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-8">
              <div className="leader-header">
                <h2 className="heading innerpageheading mb-2 ">{name}</h2>
                <h5 className="subheading18 mb-0">{designation}</h5>
              </div>

              <div className="leader-content mt-4">
                {message.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
