import React from "react";

type EnquiryItem = {
  name: string;
  designation: string;
  phone: string;
};

type EnquirySectionProps = {
  title: string;
  highlight: string;
  backgroundImage: string;
  enquiries: EnquiryItem[];
  className?: string;
};

const EnquirySection: React.FC<EnquirySectionProps> = ({
  title,
  highlight,
  backgroundImage,
  enquiries,
  className,
}) => {
  return (
    <section className={`btech_enquiry_section ${className || ""}`}>
      <div className="btech_enquiry_background_img_box">
        <img src={backgroundImage} alt="Background" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* Heading */}
            <div className="heading innerpageheading text-center">
              {/* {title} <span>{highlight}</span> */}
              {title} {highlight}
            </div>

            {/* Listing */}
            <div className="enquiry_listing_mainbox">
              {enquiries.map((item, index) => (
                <div className="enquiry_listing" key={index}>
                  <div className="enquiry_listing_headingbox">
                    <div className="enquiry_listing_heading">
                      {item.name}
                    </div>
                    <div className="enquiry_listing_designation">
                      {item.designation}
                    </div>
                  </div>

                  <a
                    href={`tel:+91${item.phone}`}
                    className="enquiry_listing_number_box"
                  >
                    <div className="enquiry_listing_number_icon">
                      <img
                        src="/images/contact-us/phone-icon.svg"
                        alt="Phone icon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="enquiry_listing_number_number">
                      {item.phone}
                    </div>
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;